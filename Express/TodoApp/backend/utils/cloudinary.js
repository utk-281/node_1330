const { v2 } = require("cloudinary");
const asyncHandler = require("express-async-handler");
const fs = require("fs");

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require("../config/index");

v2.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

exports.uploadOnCloudinary = asyncHandler(async (path) => {
  if (!path) return null;

  // upload

  let response = await v2.uploader.upload(path, {
    resource_type: "auto",
  });

  fs.unlinkSync(path);

  return response;
});
