const express = require("express");
const jwt = require("jsonwebtoken");
const Question = require("../models/ForumQuestionSchema");
const Comment = require("../models/ForumCommentSchema");
const User = require("../models/UserSchema");
const Answer = require("../models/ForumAnswerSchema");
const Reply = require("../models/ReplySchema");
const Article = require("../models/ArticleSchema");
const { Storage } = require("@google-cloud/storage");
const multer = require("multer");
const { createWriteStream } = require("fs");
const path = require("path");
const router = express.Router();

const storage = new Storage({
  keyFilename: path.join(__dirname, "../AskFern-df29817d688d.json"),
  projectId: "askfern",
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
const askFernBucket = storage.bucket("askfern.appspot.com");

router.post(
  "/postarticle",
  upload.single("file"),
  async (request, response, next) => {
    const { title, content } = request.body;
    const { createReadStream } = request.file;
    await new Promise((res) =>
      createReadStream()
        .pipe(
          askFernBucket.file(request.file.originalname).createWriteStream({
            resumable: false,
            gzip: true,
          })
        )
        .on("finish", (res) => {
          const publicUrl = `https://storage.googleapis.com/${askFernBucket.name}/${request.file.originalname}`;
          console.log(res);
        })
    );

    // const fullObj = {
    //   title: title,
    //   content: content,
    //   image: publicUrl,
    // };
    // await Article.create(fullObj, (err, item) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     response.status(201).json(item);
    //     console.log("article submitted successfully");
    //   }
    // });
  }
);

router.get("/pending", async (request, response) => {
  const questions = await Question.find({ isAnswered: false }).populate("user");
  response.json(questions);
});

router.delete("/:id", async (request, response) => {
  const questionId = request.params.id;
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  } else {
    await Question.findOneAndDelete({ _id: questionId });
    response.status(201).send("question deleted successfully");
  }
});

router.delete("/comment/:id", async (request, response) => {
  const commentId = request.params.id;
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  } else {
    await Comment.findOneAndDelete({ _id: commentId });
    response.status(201).send("comment deleted successfully");
  }
});

router.put("/comment/unflag/:id", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  } else {
    try {
      await Comment.findByIdAndUpdate(request.params.id, { isFlagged: false });
      response.status(201).send("comment unflagged successfully");
    } catch (error) {
      console.log(error.message);
    }
  }
});

router.get("/answered", async (request, response) => {
  const answered = await Question.find({ isAnswered: true })
    .populate({
      path: "comments",
      model: "Comment",
    })
    .populate("answer")
    .populate({ path: "user", model: "User" })
    .populate({ path: "comments", populate: { path: "user", model: "User" } })
    .populate({
      path: "comments",
      populate: { path: "replies", model: "Reply" },
    })
    .populate({
      path: "comments",
      populate: { path: "replies", populate: { path: "user", model: "User" } },
    });
  response.json(answered);
});

router.post("/", async (request, response) => {
  const question = new Question(request.body);
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(decodedToken.id);

  if (!question.title || !question.question) {
    return response.status(400).send({ error: "title or question missing" });
  }
  if (!question.likes) {
    question.likes = 0;
  }
  if (!question.date) {
    question.date = new Date().toISOString();
  }
  if (!question.answer) {
    question.answer = null;
  }
  question.user = user;
  const savedQuestion = await question.save();

  user.questions = user.questions.concat(savedQuestion._id);
  await user.save();

  response.status(201).json(savedQuestion);
});

router.get("/getAllArticles", async (request, response) => {
  const articles = await Article.find({});
  response.json(articles);
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const answer = new Answer({
    answer: body.answer,
    question: body._id,
  });
  const savedAnswer = await answer.save();
  // console.log('savedAnswer', savedAnswer)
  const answeredPost = await Question.findByIdAndUpdate(
    req.params.id,
    { isAnswered: true, answer: savedAnswer._id },
    { new: true }
  ).populate("answer");
  // console.log('answeredPost', answeredPost)
  res.json(answeredPost);
});

router.put("/editanswer/:id", async (req, res) => {
  const body = req.body;
  const updatedAnswer = await Answer.findByIdAndUpdate(
    req.params.id,
    { answer: body.answer },
    { new: true }
  );
  // console.log('answeredPost', answeredPost)
  res.json(updatedAnswer);
});

router.put("/flag/:id", async (req, res) => {
  const flaggedComment = await Comment.findByIdAndUpdate(
    req.params.id,
    { isFlagged: true },
    { new: true }
  ).populate("user");
  res.json(flaggedComment);
});

router.put("/addcomment/:id", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(decodedToken.id);
  const toAdd = {
    content: request.body.comment,
  };
  const comment = new Comment(toAdd);

  comment.user = user;
  const savedComment = await comment.save();

  user.comments = user.comments.concat(savedComment._id);
  await user.save();

  const commentAdded = await Question.findByIdAndUpdate(
    request.params.id,
    {
      $push: { comments: comment },
    },
    { new: true }
  ).populate({
    path: "comments",
    model: "Comment",
    populate: {
      path: "user",
      model: "User",
    },
  });
  response.json(commentAdded);
});

router.put("/addreply/:id", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findById(decodedToken.id);
  const toAdd = {
    reply: request.body.reply,
  };
  const newReply = new Reply(toAdd);

  newReply.user = user;
  const savedReply = await newReply.save();

  user.replies = user.replies.concat(savedReply._id);
  await user.save();

  const replyAdded = await Comment.findByIdAndUpdate(
    request.params.id,
    {
      $push: { replies: newReply },
    },
    { new: true }
  )
    .populate({
      path: "replies",
      model: "Reply",
      populate: {
        path: "user",
        model: "User",
      },
    })
    .populate({
      path: "user",
      model: "User",
    });
  response.json(replyAdded);
});

router.put("/heart/:id", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  let updatedUser = await User.findByIdAndUpdate(
    decodedToken.id,
    { $push: { heartedPosts: request.params.id } },
    { new: true }
  );

  await Question.findByIdAndUpdate(
    request.params.id,
    { $inc: { likes: 1 } },
    { new: true }
  );
  response.json(updatedUser.heartedPosts);
});

router.get("/flagged", async (req, res) => {
  const flaggedComments = await Comment.find({ isFlagged: true }).populate(
    "user"
  );
  res.json(flaggedComments);
});

module.exports = router;
