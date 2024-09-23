const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    avatar: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      trim: true,
    },
    role: {
      type: String,
      lowercase: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

// password hashing
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10); // salt ==> random string  (2^10 iterations)
  this.password = await bcrypt.hash(this.password, salt);
});

// password comparing
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = model("User", userSchema);
