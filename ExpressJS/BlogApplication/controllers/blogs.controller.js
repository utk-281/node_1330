const BLOG_SCHEMA = require("../models/blogs.model");

exports.createBlog = async (req, res) => {
  try {
    let { title, body } = req.body;
    let newBlog = await BLOG_SCHEMA.create({ title, body, author: req?.myUser?._id });
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
    // let oneBlog = await BLOG_SCHEMA.findOne({_id:id});
    if (!oneBlog) return res.status(404).json({ message: "no blog found" });
    res.status(200).json({ success: true, message: "blog fetched successfully", oneBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    let { id } = req.params;
    // let findBlog = await BLOG_SCHEMA.findOne({ _id: id });
    let userId = req.myUser._id; // author:userId
    if (!id) return res.status(404).json({ message: "no blog found" });
    // let updatedBlog = await BLOG_SCHEMA.findByIdAndUpdate(id, req.body, {
    //   new: true,
    // }); // here we have to check two conditions 1) params id is same as blog id 2) the user which has initiated the req matches with author

    let findBlog = await BLOG_SCHEMA.findOne({ _id: id, author: userId });
    if (!findBlog) return res.status(404).json({ message: "no blog found" });

    let updatedBlog = await BLOG_SCHEMA.updateOne({ _id: id, author: userId }, req.body);

    res.status(200).json({ success: true, message: "blog updated successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    let { id } = req.params;

    let findBlog = await BLOG_SCHEMA.findOne({ _id: id, author: req.myUser._id });
    if (!findBlog) return res.status(404).json({ message: "no blog found" });

    let deletedBlog = await BLOG_SCHEMA.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "blog deleted successfully", deletedBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
