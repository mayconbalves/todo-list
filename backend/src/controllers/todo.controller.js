const Product = require('../models/todo.model')

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
  }
}

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
      if (err) return next(err)
      res.send(product)
  })
}

exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
      if (err) return next(err)
      res.send('Product udpated.')
  })
}

exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err)
      res.send('Deleted successfully!')
  })
}
