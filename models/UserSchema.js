const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    minlength: 4,
    unique: true
  },
  passwordHash: String,
  dateOfBirth: Date,
  gender: String,
  email: String,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
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