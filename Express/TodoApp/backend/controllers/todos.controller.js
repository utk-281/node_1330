const TODO_SCHEMA = require("../models/todos.model");
const asyncHandler = require("express-async-handler");
const { ErrorHandler } = require("../utils/ErrorHandler");

//! add todo
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

//! fetch all todos
exports.fetchAllTodos = asyncHandler(async (req, res, next) => {
  let todos = await TODO_SCHEMA.find({ createdBy: req.foundUser._id });
  if (todos.length === 0) {
    return next(new ErrorHandler("no todo found", 404));
  }
  res.status(200).json({ success: true, message: "todos fetched successfully", data: todos });
});

//! fetch one todo
exports.fetchOneTodo = asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  let todo = await TODO_SCHEMA.findOne({ _id: id, createdBy: req.foundUser._id });

  if (!todo) {
    return next(new ErrorHandler("todo not found", 404));
  }

  res.status(200).json({ success: true, message: "todo fetched successfully", data: todo });
});

//! update todo
exports.updateTodo = asyncHandler(async (req, res, next) => {
  let id = req.params.id;

  let findTodo = await TODO_SCHEMA.findOne({ _id: id, createdBy: req.foundUser._id });

  if (!findTodo) {
    return next(new ErrorHandler("todo not found", 404));
  }

  let updateTodo = await TODO_SCHEMA.findByIdAndUpdate(
    { _id: id, createdBy: req.foundUser._id },
    req.body,
    { new: true }
  );

  res.status(200).json({ success: true, message: "todo updated successfully", data: updateTodo });
});

//! delete todo
exports.deleteTodo = asyncHandler(async (req, res, next) => {
  let id = req.params.id;

  let findTodo = await TODO_SCHEMA.findOne({ _id: id, createdBy: req.foundUser._id });

  if (!findTodo) {
    return next(new ErrorHandler("todo not found", 404));
  }

  await TODO_SCHEMA.findByIdAndDelete({ _id: id, createdBy: req.foundUser._id });

  res.status(200).json({ success: true, message: "todo deleted successfully" });
});
