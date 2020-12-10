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
  avatarName: {type: String, default: 'anonymous'},
  avatarProps: {
    accessory: String,
    bgColor: String,
    bgShape: {type: String, default: 'squircle'},
    body: String,
    clothing: String,
    clothingColor: String,
    eyebrows: String,
    eyes: String,
    facialHair: String,
    graphic: String,
    hair: String,
    hairColor: String,
    hat: {type: String, default: 'none'},
    hatColor: {type: String, default: 'black'},
    lashes: {type: Boolean, default: true},
    lipColor: {type: String, default: 'pink'},
    mouth: String,
    showBackground: {type: Boolean, default: true},
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