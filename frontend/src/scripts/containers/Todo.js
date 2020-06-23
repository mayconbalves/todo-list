/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../actions/todo'

import Menu from '../components/utils/Menu'
import TodoForm from '../components/todo/Form'
import TodoList from '../components/todo/List'

class Todo extends Component {
	constructor(props) {
		super(props)

		this.state = { description: '' }
	}

	componentDidMount() {
		this.handleTodoList()
	}

	handleTodoList = () => this.props.fetchTodoList()

	handleChange = (event) =>
		this.setState({ ...this.state, description: event.target.value })

	handleAdd = (description) => this.props.fetchAddTodo(description)

	handleDelete = (list) => this.props.fetchDeleteTodo(list)

	handleDone = (list) => {
		const { fetchDoneTodo } = this.props
		const { description } = this.state

		fetchDoneTodo(list, description)
	}

	handlePending = (list) => this.props.fetchPendingTodo(list)

	render() {
		const { description } = this.props
		const list = description || []
		return (
			<main>
				<Menu />
				<div className='container'>
					<h1 className='margin-top'>Tarefas</h1>
					<TodoForm
						description={list}
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
	fetchTodoList: PropTypes.func.isRequired,
	fetchAddTodo: PropTypes.func.isRequired,
	fetchDeleteTodo: PropTypes.func.isRequired,
	fetchDoneTodo: PropTypes.func.isRequired,
	fetchPendingTodo: PropTypes.func.isRequired,
	description: PropTypes.array,
}

const mapStateToProps = ({ todoReducer }) => ({
	description: todoReducer.description,
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(todoActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
