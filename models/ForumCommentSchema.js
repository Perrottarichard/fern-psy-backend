
const mongoose = require('mongoose')

const forumCommentSchema = mongoose.Schema({
  comment: String,
  date: Date,
  likes: Number,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User'
  }
})

module.exports = mongoose.model("Comment", forumCommentSchema)