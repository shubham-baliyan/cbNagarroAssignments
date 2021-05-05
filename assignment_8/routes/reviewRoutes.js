const express = require("express");
const ReveiwController = require("../controllers/reviewController");
const router = express.Router();
// router.get("/", BlogController.createOne);
router.route("/:id").post(ReveiwController.createOne);

module.exports = router;
