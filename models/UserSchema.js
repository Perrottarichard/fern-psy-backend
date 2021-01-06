const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  passwordHash: String,
  email: {
    type: String,
    unique: true,
  },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reply" }],
  moods: [
    {
      date: { type: Date, default: Date.now },
      mood: { type: Number },
    },
  ],
  points: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  avatarName: { type: String, default: "anonymous" },
  heartedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  avatarProps: {
    accessory: { type: String, default: "none" },
    bgColor: String,
    bgShape: { type: String, default: "squircle" },
    body: String,
    clothing: { type: String, default: "shirt" },
    clothingColor: String,
    eyebrows: String,
    eyes: { type: String, default: "normal" },
    facialHair: String,
    graphic: String,
    hair: String,
    hairColor: String,
    hat: { type: String, default: "none" },
    hatColor: { type: String, default: "green" },
    lashes: { type: Boolean, default: true },
    lipColor: { type: String, default: "pink" },
    mouth: String,
    showBackground: { type: Boolean, default: true },
    skinTone: String,
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
