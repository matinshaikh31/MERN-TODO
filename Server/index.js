const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/todo");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/todo");

app.get("/get", (req, res) => {
  Todo.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  Todo.findByIdAndUpdate({ _id: id }, { done: true })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
app.post("/add", (req, res) => {
  const task = req.body.task;
  Todo.create({
    task,
  }).then((data) => res.json(data));
});
app.listen(PORT, () => {
  console.log(`Server is Started at Port ${PORT}`);
});
