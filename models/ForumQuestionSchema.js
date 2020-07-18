const mongoose = require('mongoose')

const forumQuestionSchema = mongoose.Schema({
  title: String,
  question: String,
  answer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answer',
    default: null
  },
  isAnswered: Boolean,
  tags: [String],
  date: { type: Date, default: Date.now },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model("Question", forumQuestionSchema)



