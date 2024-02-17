const express=require('express');
const router = express.Router();

//Import controller
const createTodo = require("../contollers/createTodo");
const getTodo = require("../contollers/getTodo");
const updateTodo = require("../contollers/updateTodo");
const deleteTodo = require("../contollers/deleteTodo");

//Define API Routes.
router.post("/create",createTodo.cerateTodod);
router.get("/allTodo",getTodo.getTodo);
router.get("/getTodo/:id",getTodo.getSingleTodo);
router.put("/updateTodo/:id",updateTodo.updateTodo);
router.delete("/deleteTodo/:id",deleteTodo.deleteTodo);

module.exports = router;