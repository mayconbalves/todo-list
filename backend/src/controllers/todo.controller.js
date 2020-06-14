const Product = require('../models/todo.model')

exports.todo_list = function (req, res) {
  Product.find(req.params, function(err, product) {
    if(err) {
      return next(err)
    }
    res.send(product)
  })
}

exports.todo_create = function (req, res) {
  let product = new Product(
      {
        description: req.body.description,
      }
  )

  product.save(function (err) {
      if (err) {
          return next(err)
      }
      res.send('Product Created successfully')
  })
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
