const { Router } = require("express");
const { addBlog, fetchAllBlogs } = require("../controllers/blogs.controller");
const router = Router();

router.post("/add", addBlog);

router.get("/all", fetchAllBlogs);

module.exports = router;
