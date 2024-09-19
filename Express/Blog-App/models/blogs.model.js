const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    //TODO: add user
  },
  { timestamps: true } // createdAt and updatedAt
);

module.exports = mongoose.model("Blog", blogSchema); //! blogs
