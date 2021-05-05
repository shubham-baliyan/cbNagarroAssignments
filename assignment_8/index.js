const express = require("express");
const dotenv = require("dotenv");
const chalk = require("chalk");
const path = require("path");
const BlogRouter = require("./routes/blogRoutes");
const ReviewRouter = require("./routes/reviewRoutes");
const Blog = require("./model/blogs");
const app = express();
dotenv.config();
const MongoDB = require("./DB/index");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.get("/", async (req, res) => {
  let blogs = await Blog.find({}).populate("reviewId");

  // console.log(blogs);
  res.render("index", { blogs });
});
app.use("/blog", BlogRouter);
app.use("/review", ReviewRouter);
// app.get("/blog/:id", (req, res) => {
//   res.render("blog/single");
// });
// app.get("/editBlog/:id", (req, res) => {
//   res.render("blog/edit");
// });

app.listen(process.env.PORT, () => {
  console.log(chalk.magenta("server is runnig on port 3000"));
});
