const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      //   required:true
      required: [true, "this is a mandatory field"],
    },
    email: {
      type: String,
      trim: true,
      //   required:true
      required: [true, "this is a mandatory field"],
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      //   required:true
      required: [true, "this is a mandatory field"],
    },
    role: {
      type: String,
      enum: ["user", "admin"], // we are giving options to select from these two
      default: "user",
    },
    phoneNo: {
      type: Number, //TODO validation of 10 digits
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
