const { Router } = require("express");
const {
  addBlog,
  fetchAllBlogs,
  fetchOneBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs.controller");
const router = Router();

router.post("/add", addBlog);

router.get("/all", fetchAllBlogs);

router.get("/one/:id", fetchOneBlog);

router.put("/update/:id", updateBlog);

router.delete("/delete/:id", deleteBlog);

module.exports = router;
