import {
  ADD_TODO_SUCCESS,
  TODO_LIST_SUCCESS
} from '../constants/actionTypes'

import axios from 'axios'

const apiKeyMlab = '6b7477mEkxRuqQhGgZwo0i2tbHnerl7a'
const URL = `https://api.mlab.com/api/1/databases/maycon-todo-list/collections/todo-list?apiKey=${apiKeyMlab}`

export const fetchTodoList = () => {
  const request = axios.get(URL)
  return {
    type: TODO_LIST_SUCCESS,
    payload: request
  }
}

export const fetchAddTodo = description => {
  const request = axios.post(URL, { description, done: false })
  return {
    type: ADD_TODO_SUCCESS,
    payload: request
  }
}
