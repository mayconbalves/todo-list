const Todo = require('../models/todo.model')

module.exports = {
  async todo_list(req, res) {
    const product = await Product.find({}).sort('-createdAt-')
    return res.json(product)
  },

  async todo_create(req, res) {
    const product = await Product.create(
        {
          description: req.body.description,
          done: req.body.done
        }
    )
    return res.json(product)
  },

  async todo_delete(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id)
    return res.json(product)
  },

  async todo_update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, {$set: req.body})

    return res.json(product)
  }
}
