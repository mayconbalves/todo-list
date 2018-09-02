import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Menu from '../components/utils/Menu'
import TodoForm from '../components/todo/Form'
import TodoList from '../components/todo/List'
import * as todoActions from '../actions/todo'

const apiKeyMlab = '6b7477mEkxRuqQhGgZwo0i2tbHnerl7a'

class Todo extends Component {
  constructor (props) {
    super (props)

    this.state = { description: '', list: [] }
  }

  componentWillMount () {
    this.handleTodoList()
  }

  handleTodoList = () => {
    const { fetchTodoList } = this.props

    fetchTodoList()
  }

  handleChange = (event) => {
    this.setState({...this.state, description: event.target.value })
  }

  handleAdd = () => {
    const { fetchAddTodo } = this.props
    const description = this.state.description

    fetchAddTodo(description)
      .then(resp => this.handleTodoList())
  }

  handleDelete = (list) => {
    const { fetchDeleteTodo } = this.props

    fetchDeleteTodo(list)
      .then((resp) => this.handleTodoList())
  }

  handleDone = (list) => {
    const { fetchDoneTodo } = this.props
    const description = this.state.description

    fetchDoneTodo(list, description)
      .then((resp) => this.handleTodoList())

  }

  handlePending = (list) => {
    const id = list._id.$oid
    const PUT = `https://api.mlab.com/api/1/databases/maycon-todo-list/collections/todo-list/${id}?apiKey=${apiKeyMlab}`
    axios.put(PUT, { ...list, done: false })
      .then(resp => this.handleTodoList())
  }

  render () {
    const { list } = this.props

    return (
      <main>
        <Menu />
          <div className='container'>
            <h1 className='margin-top'>Tarefas</h1>
            <TodoForm
              description={list.description}
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
      </main>
    )
  }
}

Todo.propTypes = {
  description: PropTypes.string.isRequired,
  fetchTodoList: PropTypes.func.isRequired,
  fetchAddTodo: PropTypes.func.isRequired,
  fetchDeleteTodo: PropTypes.func.isRequired,
  fetchDoneTodo: PropTypes.func.isRequired,
  list: PropTypes.array
}

const mapStateToProps = ({ todoReducer }) => {
  return {
    list: todoReducer.list,
    description: todoReducer.description
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(todoActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
