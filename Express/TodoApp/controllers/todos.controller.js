const TODO_SCHEMA = require("../models/todos.model");
const asyncHandler = require("express-async-handler");

exports.addTodo = asyncHandler(async (req, res) => {
  let { task, description, status, lastDate } = req.body;

  let newTodo = await TODO_SCHEMA.create({
    task,
    description,
    status,
    createdBy: req.foundUser._id,
  });

  res.status(201).json({ success: true, message: "todo created successfully", data: newTodo });
});
