const { Router } = require("express");
const {
  createBlog,
  fetchAllBlogs,
  fetchOneBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogs.controller");
const { authenticate } = require("../middlewares/protect");
const router = Router();

router.post("/add-blog", authenticate, createBlog);
router.get("/blogs", fetchAllBlogs);
router.get("/blog/:id", fetchOneBlog);
router.delete("/blog/:id", authenticate, deleteBlog);
router.patch("/blog/:id", authenticate, updateBlog);

module.exports = router;
