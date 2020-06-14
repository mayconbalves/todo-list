const express = require('express')
const router = express.Router()

// Require the controllers WHICH WE DID NOT CREATE YET!!
const todo_controller = require('../controllers/todo.controller')


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', todo_controller.test)
router.get('/:id', todo_controller.product_details)
router.post('/create', todo_controller.product_create)
router.put('/:id/update', todo_controller.product_update)
router.delete('/:id/delete', todo_controller.product_delete)

module.exports = router