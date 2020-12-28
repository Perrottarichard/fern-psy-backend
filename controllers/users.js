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
    let defaultMood = { mood: 2.5 };
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
  console.log(request.body.mood);
  let newMood = { mood: request.body.mood };
  console.log(newMood);
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
  });
});

module.exports = router;
