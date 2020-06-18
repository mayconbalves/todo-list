import {
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  DELETE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR,
  DONE_TODO_SUCCESS,
  DONE_TODO_ERROR
} from '../constants/actionTypes'

import axios from 'axios'
import API from '../constants/api'

export const fetchTodoList = () => dispatch => {
  axios.get(`${API.URL}/list`)
    .then(response => dispatch(todoListSuccess(response.data, dispatch)))
    .catch(error => dispatch(todoListError(error)))
}

const todoListSuccess = data => ({
  type: TODO_LIST_SUCCESS,
  payload: data
})

const todoListError = error => ({
    type: TODO_LIST_ERROR,
    payload: error
})

export const fetchAddTodo = description => dispatch => {
  axios.post(`${API.URL}/create`, { description, done: false })
    .then(respomse => dispatch(addTodoSuccess(respomse.data, dispatch)))
    .catch(error => dispatch(addTodoError(error)))
}

const addTodoSuccess = data => ({
  type: ADD_TODO_SUCCESS,
  payload: data
})

const addTodoError = error => ({
  type: ADD_TODO_ERROR,
  payload: error
})

const deleteTodoSuccess = data => ({
  type: DELETE_TODO_SUCCESS,
  payload: data
})

const deleteTodoError = error => ({
  type: DELETE_TODO_ERROR,
  payload: error
})

export const fetchDeleteTodo = _id => dispatch => {
  axios.delete(`${API.URL}/${_id}/delete`)
    .then(response => dispatch(deleteTodoSuccess(response.data)))
    .catch(error => dispatch(deleteTodoError(error)))
    .then(() => dispatch(fetchTodoList()))
}

const doneTodoSuccess = data => ({
  type: DONE_TODO_SUCCESS,
  payload: data
})

const doneTodoError = error => ({
  type: DONE_TODO_ERROR,
  payload: error
})

export const fetchDoneTodo = (list, description) => dispatch => {
  const id = list._id.$oid
  axios.put(`${API_URL.URL}/${id}?apiKey=${apiKeyMlab}`, { description })
    .then(response => dispatch(doneTodoSuccess(response.data)))
    .catch(error => dispatch(doneTodoError(error)))
    .then(() => dispatch(fetchTodoList()))
}

export const fetchPendingTodo = list => {
  const id = list._id.$oid
  const request = axios.put(`${API_URL.URL}/${id}?apiKey=${apiKeyMlab}`, { ...list, done: false })
  return {
    type: DONE_TODO_SUCCESS,
    payload: request
  }
}
