const mongoose = require('mongoose')

const contactFormSchema = mongoose.Schema({
  name: String,
  email: String,
  LINE: String,
  message: String,
  date: Date,
})

module.exports = mongoose.model('Contact', contactFormSchema)
