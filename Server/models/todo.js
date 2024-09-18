const mongoose = require("mongoose");

const todoSchemea = new mongoose.Schema({
  task: String,
  done:{
    type:Boolean,
    default:false
  }
});

const Todo = mongoose.model("todos", todoSchemea);
module.exports= Todo