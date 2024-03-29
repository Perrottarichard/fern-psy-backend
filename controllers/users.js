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
//get user points
router.get("/userpointsandlevel/:id", async (request, response) => {
  const id = request.params.id;
  const user = await User.findById(id);
  const stats = {
    points: user.points,
    level: user.level,
  };
  response.json(stats);
});
router.post("/adduserpoints/:id", async (request, response) => {
  const id = request.params.id;
  const user = await User.findById(id);
  user.points += request.body.pointsToAdd;
  await user.save();
  response.json("success add points");
});
router.get("/levelupuser/:id", async (request, response) => {
  const id = request.params.id;
  const user = await User.findById(id);
  user.level += 1;
  await user.save();
  response.json("success level up");
});

//cron job to add default mood to each user
router.get("/cronmood", async (request, response) => {
  const users = await User.find({});
  const now = DateTime.local();

  const checkIfMoodToday = (userDoc) => {
    const id = userDoc._id;
    const usersWhoHaveMoodsToday = [];
    let dateObjs = userDoc.moods.filter((m) => m.date);
    let dateArr = dateObjs.map((d) => d.date);
    let newArr = [];
    dateArr.forEach((date) => {
      let d = DateTime.fromJSDate(date);
      newArr.push(d);
    });
    newArr.forEach((date) => {
      if (date.day === now.day) {
        usersWhoHaveMoodsToday.push(id);
      }
    });
    return usersWhoHaveMoodsToday.includes(id);
  };
  let noMoodToday = [];

  users.forEach((u) => {
    if (!checkIfMoodToday(u)) {
      noMoodToday.push(u._id);
    }
  });
  noMoodToday.forEach(async (user) => {
    let defaultMood = { mood: 3 };
    await User.findByIdAndUpdate(
      user,
      { $push: { moods: defaultMood } },
      { new: true }
    );
  });
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
  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      email,
      passwordHash,
    });
    const userForToken = {
      email: user.email,
      id: user._id,
    };
    const token = jwt.sign(userForToken, process.env.SECRET);

    response.status(200).send({
      token: token,
      email: user.email,
      _id: user._id,
      avatarProps: user.avatarProps,
      avatarName: user.avatarName,
      heartedPosts: user.heartedPosts,
      moods: user.moods,
      points: user.points,
      level: user.level,
    });
  } catch (error) {
    console.log(error);
  }
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
    points: user.points,
    level: user.level,
  });
});

router.put("/addmood", async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  let newMood = { mood: request.body.mood };
  const user = await User.findByIdAndUpdate(
    decodedToken.id,
    { $push: { moods: newMood } },
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
    points: user.points,
    level: user.level,
  });
});

module.exports = router;
