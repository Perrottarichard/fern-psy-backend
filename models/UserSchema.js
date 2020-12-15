const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  passwordHash: String,
  email: {
    type: String,
    unique: true,
  },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
  avatarName: {type: String, default: 'anonymous'},
  heartedPosts: {type: Array},
  avatarProps: {
    accessory: String,
    bgColor: String,
    bgShape: String,
    body: String,
    clothing: String,
    clothingColor: String,
    eyebrows: String,
    eyes: String,
    facialHair: String,
    graphic: String,
    hair: String,
    hairColor: String,
    hat: String,
    hatColor: String,
    lashes: Boolean,
    lipColor: String,
    mouth: String,
    showBackground: Boolean,
    skinTone: String
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v
    delete returnedObject.passwordHash
  }
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model("User", userSchema)

module.exports = User