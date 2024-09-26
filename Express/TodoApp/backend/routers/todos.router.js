const { Router } = require("express");
const {
  addTodo,
  fetchAllTodos,
  fetchOneTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const router = Router();

router.post("/add", authenticate, addTodo);
router.get("/all", authenticate, fetchAllTodos);
router.get("/one/:id", authenticate, fetchOneTodo);
router.patch("/update/:id", authenticate, updateTodo);
router.delete("/delete/:id", authenticate, deleteTodo);

module.exports = router;
