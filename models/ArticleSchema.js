const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: String,
  content: String,
  views: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Article", articleSchema);
