
const mongoose = require('mongoose')

const forumCommentSchema = mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  isFlagged: { type: Boolean, default: false }
})

module.exports = mongoose.model("Comment", forumCommentSchema)