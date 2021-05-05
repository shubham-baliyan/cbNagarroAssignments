const Review = require("../model/reviews");
const Blog = require("../model/blogs");
exports.createOne = async (req, res) => {
  //   console.log(req.params.id, req.body);
  const review = new Review(req.body);
  const blog = await Blog.findById(req.params.id);
  blog.reviewId.push(review);
  await blog.save();
  await review.save();

  res.status(200).json({
    status: "success",
    data: {
      blog,
      review,
    },
  });
};
