import {
  ADD_TODO_SUCCESS,
  TODO_LIST_SUCCESS
} from '../constants/actionTypes'

import axios from 'axios'

import API_URL from '../constants/api'

export const fetchTodoList = () => {
  const request = axios.get(API_URL.TODO_LIST)
  return {
    type: TODO_LIST_SUCCESS,
    payload: request
  }
}

export const fetchAddTodo = description => {
  const request = axios.post(API_URL.TODO_LIST, { description, done: false })
  return {
    type: ADD_TODO_SUCCESS,
    payload: request
  }
}
