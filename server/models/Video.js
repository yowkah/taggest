const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  path: String,
  filename: String,
  title: String,
  description: String,
  tags: [String]
});

const Video = mongoose.model("videos", videoSchema);

module.exports = Video;
