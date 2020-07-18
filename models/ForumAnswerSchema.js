const mongoose = require('mongoose')

const forumAnswerSchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  answer: { type: String, default: null }
})

module.exports = mongoose.model("Answer", forumAnswerSchema)