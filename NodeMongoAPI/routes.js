var express = require('express');
var router = express.Router();

const Todo = require('./todo-model');

router.post('/todos', function (req, res) {
  const todo = new Todo({
    title: req.body.title
  });

  todo.save(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Todo Entry."
      });
    });
});

router.get('/todos', function (req, res) {
  Todo.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
});

module.exports = router;