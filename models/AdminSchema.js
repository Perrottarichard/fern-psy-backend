const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const adminSchema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    minlength: 4,
    unique: true
  },
  passwordHash: String
})

adminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v
    delete returnedObject.passwordHash
  }
})

adminSchema.plugin(uniqueValidator)

const Admin = mongoose.model("Admin", adminSchema)

module.exports = Admin