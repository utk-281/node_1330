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

exports.fetchOneBlog = async (req, res) => {
  try {
    // let exampleURL==http........UNIQUE_ID........
    let { id } = req.params;
    console.log(id);
    let findBlog = await BLOG_SCHEMA.findOne({ _id: id });
    if (!findBlog) {
      return res.status(200).json({
        success: true,
        message: "no blog found",
      });
    }

    res.status(200).json({ success: true, message: "blog details fetched", data: findBlog });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "cannot fetch the details of blog", error: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    let { id } = req.params;
    let findBlog = await BLOG_SCHEMA.findOne({ _id: id });

    if (!findBlog) {
      return res.status(200).json({
        success: true,
        message: "no blog found",
      });
    }

    /* findBlog.title = req.body.title;
    findBlog.body = req.body.body;
    findBlog.save(); */

    let updateBlog = await BLOG_SCHEMA.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          title: req.body.title,
          body: req.body.body,
        },
      }
    );

    res.status(200).json({ success: true, message: "blog updated successfully", data: updateBlog });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      customMessage: "error while updating a blog",
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    let { id } = req.params;

    let findBlog = await BLOG_SCHEMA.findOne({ _id: id });

    if (!findBlog)
      return res.status(200).json({
        success: false,
        message: "no blog found",
      });

    await BLOG_SCHEMA.deleteOne({ _id: id });
    res.status(200).json({ success: true, message: "blog deleted" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while deleting a blog",
      error: error.message,
    });
  }
};
