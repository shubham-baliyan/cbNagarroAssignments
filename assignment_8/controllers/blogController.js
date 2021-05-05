const Blog = require("../model/blogs");

exports.getOne = async (req, res) => {
  // console.log(req.params, req.query);
  const blog = await Blog.findById(req.params.id).populate("reviewId");
  console.log(blog);
  if (req.query.view === "true") res.render("blog/single", { blog });
  else res.render("blog/edit", { blog });
};

exports.getAll = async (req, res) => {
  res.render("index");
};

exports.createOne = async (req, res) => {
  res.render("blog/create");
};

exports.editOne = async (req, res) => {
  console.log(req.body, req.params);
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  console.log(blog);
  res.status(200).json({
    status: "success",
    data: {
      data: blog,
    },
  });
};

exports.updateOne = async (req, res) => {
  console.log("letsUpdate");
  const blog = new Blog(req.body);
  await blog.save();

  res.redirect("/");
};

exports.deleteOne = async (req, res) => {
  console.log(req.params.id);
  await Blog.findByIdAndDelete(req.params.id);
  // const blog = new Blog(req.body);
  // await blog.save();

  res.status(204).json({
    status: "success",
  });
};
