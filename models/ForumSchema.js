const mongoose = require('mongoose')

const forumQuestionSchema = mongoose.Schema({
  title: String,
  question: String,
  answer: String,
  isAnswered: Boolean,
  tags: [String],
  date: Date,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User'
  }
})

const Question = mongoose.model("Question", forumQuestionSchema)

const forumCommentSchema = mongoose.Schema({
  comment: String,
  date: Date,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User'
  }
})

const Comment = mongoose.model("Comment", forumCommentSchema)


module.exports = {
  Comment: Comment,
  Question: Question
}
