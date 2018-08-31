import React, { Component } from 'react'
import axios from 'axios'
import Menu from '../components/utils/Menu'
import TodoForm from '../components/todo/Form'
import TodoList from '../components/todo/List'

const apiKeyMlab = '6b7477mEkxRuqQhGgZwo0i2tbHnerl7a'
const URL = `https://api.mlab.com/api/1/databases/maycon-todo-list/collections/todo-list?apiKey=${apiKeyMlab}`

class Todo extends Component {
  constructor (props) {
    super (props)

    this.state = { description: '', list: [] }
  }

  componentDidMount () {
    this.handleTodoList()
  }

  handleTodoList = () => {
    axios.get(URL)
      .then(resp => this.setState({
          ...this.state,
          description: '',
          list: resp.data
        })
      )
  }

  handleChange = (event) => {
    this.setState({...this.state, description: event.target.value })
  }

  handleAdd = () => {
    const description = this.state.description
    axios.post(URL, {description})
      .then(resp => this.handleTodoList())
  }

  handleDelete = (list) => {
    const id = list._id.$oid
    const DELETE = `https://api.mlab.com/api/1/databases/maycon-todo-list/collections/todo-list/${id}?apiKey=${apiKeyMlab}`
    axios.delete(DELETE)
      .then((resp) => this.handleTodoList())
  }

  handleDone = (list) => {
    const id = list._id.$oid
    const PUT = `https://api.mlab.com/api/1/databases/maycon-todo-list/collections/todo-list/${id}?apiKey=${apiKeyMlab}`
    axios.put(PUT, { ...list, done: true })
      .then(resp => this.handleTodoList())

  }

  handlePending = (list) => {
    const id = list._id.$oid
    const PUT = `https://api.mlab.com/api/1/databases/maycon-todo-list/collections/todo-list/${id}?apiKey=${apiKeyMlab}`
    axios.put(PUT, { ...list, done: false })
      .then(resp => this.handleTodoList())
  }

  render () {
    const { description, list } = this.state
    return (
      <div>
        <Menu />
        <h1>Tarefas</h1>
        <TodoForm
          description={description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />

        <TodoList
          list={list}
          handleDelete={this.handleDelete}
          handleDone={this.handleDone}
          handlePending={this.handlePending}
        />
      </div>
    )
  }
}

export default Todo
