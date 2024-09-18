const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: 5,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

//! pre--hooks
userSchema.pre("save", async function () {
  let salt = await bcrypt.genSalt(2);
  let hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

module.exports = model("User", userSchema);
