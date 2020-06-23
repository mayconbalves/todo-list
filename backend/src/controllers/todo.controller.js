const Todo = require('../models/todo.model')

module.exports = {
  async todo_list(req, res) {
    const todo = await Todo.find({}).sort('-createdAt-')
    return res.json(todo)
  },

  async todo_create(req, res) {
    const todo = await Todo.create(
        {
          description: req.body.description,
          done: req.body.done
        }
    )
    return res.json(todo)
  },

  async todo_delete(req, res) {
    const todo = await Todo.findByIdAndRemove(req.params.id)
    return res.json(todo)
  },

  async todo_update(req, res) {
    const todo = await Todo.findByIdAndUpdate(req.params.id, {$set: req.body})

    return res.json(todo)
  }
}
