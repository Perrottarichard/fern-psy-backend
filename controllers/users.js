const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const { DateTime } = require("luxon");

//get all users
router.get("/", async (request, response) => {
  const users = await User.find({});
  response.json(users.map((u) => u.toJSON()));
});
//cron job to add default mood to each user
router.get("/cronmood", async (request, response) => {
  const users = await User.find({});
  let now = DateTime.local();
  users.map((u) => u.moods.map((m) => m.date));
  console.log(now.day);
  response.send("Job completed");
});

//post a new user "signup" "register"
router.post("/register", async (request, response) => {
  const { password, email } = request.body;

  if (!password || password.length < 5 || !email) {
    return response.status(400).send({
      error:
        "password must be at least 5 characters and you must include an email",
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    email,
    passwordHash,
  });

  const savedUser = await user.save();
  response.json(savedUser);
});

router.post("/createAvatar", async (request, response) => {
  const id = request.body.id;
  const avatarProps = request.body.avatarProps;
  const avatarName = request.body.avatarName;

  const user = await User.findByIdAndUpdate(
    id,
    { avatarProps: avatarProps, avatarName: avatarName },
    { new: true }
  );

  const userForToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  response.status(200).send({
    token,
    email: user.email,
    _id: user._id,
    avatarProps: user.avatarProps,
    avatarName: user.avatarName,
    heartedPosts: user.heartedPosts,
    moods: user.moods,
  });
});

router.put("/addmood", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const user = await User.findByIdAndUpdate(
    decodedToken.id,
    { $push: { moods: request.body.mood } },
    { new: true }
  );
  const userForToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  response.status(200).send({
    token,
    email: user.email,
    _id: user._id,
    avatarProps: user.avatarProps,
    avatarName: user.avatarName,
    heartedPosts: user.heartedPosts,
    moods: user.moods,
  });
});

module.exports = router;
