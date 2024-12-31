const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
      //! select: true,--> todo
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

//! for password hashing
userSchema.pre("save", async function () {
  //! generating a random string or salt
  let salt = await bcrypt.genSalt(7);

  //! hash the password with the random string
  let hashedPassword = await bcrypt.hash(this.password, salt);

  //! store the hashed password in the database
  this.password = hashedPassword;
});

//! pre() ==> pre() is used to execute something before a defined task.
//! "save" ==> is passed as first argument which states that resources are saving in the database

//! creating a method to compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = model("User", userSchema);
