require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGODB: process.env.MONGODB,
  JWT_SECRET: process.env.JWT_SECRET,

  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
