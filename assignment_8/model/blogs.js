const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  reviewId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Review",
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
