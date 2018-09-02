import {
  ADD_TODO_SUCCESS,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR,
  DELETE_TODO_SUCCESS,
  DONE_TODO_SUCCESS
} from '../constants/actionTypes'

import axios from 'axios'
import API_URL, { apiKeyMlab } from '../constants/api'

const onFetchSuccess = (response, dispatch) => {
  if (response.data) {
    dispatch(todoListSuccess(response.data))
  }
}

const onFetchError = (error, dispatch) => {
  dispatch(todoListError(error))
}


const todoListSuccess = data => {
  return {
    type: TODO_LIST_SUCCESS,
    payload: data
  }
}

const todoListError = error => {
  return {
    type: TODO_LIST_ERROR,
    payload: error
  }
}

export const fetchTodoList = () => dispatch => {
  axios.get(API_URL.TODO_LIST)
    .then(response => onFetchSuccess(response, dispatch))
    .catch(error => onFetchError(error, dispatch))
}

export const fetchAddTodo = description => {
  const request = axios.post(API_URL.TODO_LIST, { description, done: false })
  return {
    type: ADD_TODO_SUCCESS,
    payload: request
  }
}

export const fetchDeleteTodo = list => {
  const id = list._id.$oid
  const request = axios.delete(`${API_URL.URL}/${id}?apiKey=${apiKeyMlab}`)
  return {
    type: DELETE_TODO_SUCCESS,
    payload: request
  }
}

export const fetchDoneTodo = (list, description) => {
  const id = list._id.$oid
  const request = axios.put(`${API_URL.URL}/${id}?apiKey=${apiKeyMlab}`, { description, done: true })
  return {
    type: DONE_TODO_SUCCESS,
    payload: request
  }
}

export const fetchPendingTodo = list => {
  const id = list._id.$oid
  const request = axios.put(`${API_URL.URL}/${id}?apiKey=${apiKeyMlab}`, { ...list, done: false })
  return {
    type: DONE_TODO_SUCCESS,
    payload: request
  }
}
