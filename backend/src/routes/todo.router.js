const express = require('express')
const router = express.Router()

// Require the controllers WHICH WE DID NOT CREATE YET!!
const todo_controller = require('../controllers/todo.controller')


// a simple test url to check that all of our files are communicating correctly.
router.get('/list', todo_controller.todo_list)
router.post('/create', todo_controller.todo_create)
router.put('/:id/update', todo_controller.todo_update)
router.delete('/:id/delete', todo_controller.todo_delete)

module.exports = router
