const { Schema, model } = require("mongoose");
const moment = require("moment");

const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    lastDate: {
      type: Date,
      set: function (Date) {
        return moment(Date, "DD/MM/YYYY", true).toDate();
      },
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Todo", todoSchema); // todos
