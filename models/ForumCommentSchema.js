
const mongoose = require('mongoose')

const forumCommentSchema = mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User'
  }
})

module.exports = mongoose.model("Comment", forumCommentSchema)