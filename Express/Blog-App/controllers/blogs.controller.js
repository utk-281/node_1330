const BLOG_SCHEMA = require("../models/blogs.model");

exports.addBlog = async (req, res) => {
  try {
    let payload = req.body;
    console.log(payload);

    /* alternate way to store data 
    let newBlog = new BLOG_SCHEMA(payload)
    newBlog.save()
    */

    let newBlog = await BLOG_SCHEMA.create(payload);

    res.status(201).json({ success: true, message: "blog created successfully", data: newBlog });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      customMessage: "error while adding a blog",
    });
  }
};

exports.fetchAllBlogs = async (req, res) => {
  try {
    let allBlogs = await BLOG_SCHEMA.find();

    if (allBlogs.length === 0) {
      return res.status(200).json({
        success: true,
        message: "no blogs found",
      });
    }

    res.status(200).json({
      success: true,
      message: "blogs fetched successfully",
      data: allBlogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      customMessage: "error while fetching all blogs",
    });
  }
};

//TODO:
exports.fetchOneBlog = async (req, res) => {};

exports.updateBlog = async (req, res) => {};

exports.deleteBlog = async (req, res) => {};
