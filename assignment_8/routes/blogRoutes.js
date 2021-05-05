const express = require("express");
const BlogController = require("../controllers/blogController");
const router = express.Router();
router.get("/create", BlogController.createOne);
router
  .route("/:id")
  .get(BlogController.getOne)
  .patch(BlogController.editOne)
  .delete(BlogController.deleteOne);
router.route("/").post(BlogController.updateOne);

module.exports = router;
