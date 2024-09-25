const { Router } = require("express");
const { addTodo } = require("../controllers/todos.controller");
const { authenticate } = require("../middlewares/auth.middleware");
const router = Router();

router.post("/add", authenticate, addTodo);

module.exports = router;
