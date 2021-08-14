import {
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  DELETE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR,
  DONE_TODO_SUCCESS,
  DONE_TODO_ERROR,
  PENDING_TODO_SUCCESS,
  PENDING_TODO_ERROR
} from '../constants/actionTypes'

import api from '../api'

const todoListSuccess = (data) => ({
  type: TODO_LIST_SUCCESS,
  payload: data
})

const todoListError = (error) => ({
  type: TODO_LIST_ERROR,
  payload: error
})
export const fetchTodoList = () => (dispatch) => {
  api
    .get('list')
    .then((response) => dispatch(todoListSuccess(response.data, dispatch)))
    .catch((error) => dispatch(todoListError(error)))
}

const addTodoSuccess = (data) => ({
  type: ADD_TODO_SUCCESS,
  payload: data
})

const addTodoError = (error) => ({
  type: ADD_TODO_ERROR,
  payload: error
})

export const fetchAddTodo = (description) => (dispatch) => {
  api
    .post('create', { description, done: false })
    .then((respomse) => dispatch(addTodoSuccess(respomse.data, dispatch)))
    .catch((error) => dispatch(addTodoError(error)))
    .then(() => dispatch(fetchTodoList()))
}

const deleteTodoSuccess = (data) => ({
  type: DELETE_TODO_SUCCESS,
  payload: data
})

const deleteTodoError = (error) => ({
  type: DELETE_TODO_ERROR,
  payload: error
})

export const fetchDeleteTodo = (_id) => (dispatch) => {
  api
    .delete(`${_id}/delete`)
    .then((response) => dispatch(deleteTodoSuccess(response.data)))
    .catch((error) => dispatch(deleteTodoError(error)))
    .then(() => dispatch(fetchTodoList()))
}

const doneTodoSuccess = (data) => ({
  type: DONE_TODO_SUCCESS,
  payload: data
})

const doneTodoError = (error) => ({
  type: DONE_TODO_ERROR,
  payload: error
})

export const fetchDoneTodo = (list) => (dispatch) => {
  const { _id } = list
  api
    .put(`${_id}/update`, { done: true })
    .then((response) => dispatch(doneTodoSuccess(response.data)))
    .catch((error) => dispatch(doneTodoError(error)))
    .then(() => dispatch(fetchTodoList()))
}

const pendingTodoSuccess = (data) => ({
  type: PENDING_TODO_SUCCESS,
  payload: data
})

const pendingTodoError = (error) => ({
  type: PENDING_TODO_ERROR,
  payload: error
})
export const fetchPendingTodo = (list) => (dispatch) => {
  const { _id } = list
  api
    .put(`${_id}/update`, { done: false })
    .then((response) => dispatch(pendingTodoSuccess(response.data)))
    .catch((error) => dispatch(pendingTodoError(error)))
    .then(() => dispatch(fetchTodoList()))
}
