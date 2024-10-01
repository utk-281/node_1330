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

router.post("/add", addTodo);
router.get("/all", fetchAllTodos);
router.get("/one/:id", fetchOneTodo);
router.patch("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
