const BLOG_SCHEMA = require("../models/blogs.model");

exports.createBlog = async (req, res) => {
  try {
    let { title, body } = req.body;
    let newBlog = await BLOG_SCHEMA.create({ title, body });
    res.status(201).json({ success: true, message: "blog created successfully", newBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.fetchAllBlogs = async (req, res) => {
  try {
    let allBlogs = await BLOG_SCHEMA.find();
    if (allBlogs.length === 0) return res.json({ message: "no blogs found" });
    res.status(200).json({ success: true, message: "blogs fetched successfully", allBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.fetchOneBlog = async (req, res) => {
  try {
    let { id } = req.params;
    let oneBlog = await BLOG_SCHEMA.findById(id);
    if (!oneBlog) return res.status(404).json({ message: "no blog found" });
    res.status(200).json({ success: true, message: "blog fetched successfully", oneBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) return res.status(404).json({ message: "no blog found" });
    let updatedBlog = await BLOG_SCHEMA.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ success: true, message: "blog updated successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) return res.status(404).json({ message: "no blog found" });
    let deletedBlog = await BLOG_SCHEMA.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "blog deleted successfully", deletedBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteAllBlogs = async (req, res) => {
  try {
    let deletedBlogs = await BLOG_SCHEMA.deleteMany({}); // delete all the documents from database
    res
      .status(200)
      .json({ success: true, message: "all the blogs deleted successfully", deletedBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
