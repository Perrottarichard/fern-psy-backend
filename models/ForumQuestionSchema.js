const mongoose = require('mongoose')

const forumQuestionSchema = mongoose.Schema({
  title: String,
  question: String,
  answer: String,
  isAnswered: Boolean,
  tags: [String],
  date: { type: Date, default: Date.now },
  comments: [{ content: String, date: { type: Date, default: Date.now }, isApproved: Boolean }],
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User'
  }
})

module.exports = mongoose.model("Question", forumQuestionSchema)



