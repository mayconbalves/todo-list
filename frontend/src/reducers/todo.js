import {
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR,
  DELETE_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  DONE_TODO_SUCCESS,
  DONE_TODO_ERROR,
  PENDING_TODO_SUCCESS,
  PENDING_TODO_ERROR
} from '../constants/actionTypes'

const initialState = {
  description: '',
  error: null
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case TODO_LIST_SUCCESS:
      return {
        ...state,
        description: action.payload,
        error: null
      }
    case TODO_LIST_ERROR:
    case ADD_TODO_ERROR:
    case DELETE_TODO_ERROR:
    case DONE_TODO_ERROR:
    case PENDING_TODO_ERROR:
      return {
        description: [],
        error: action.payload
      }
    case ADD_TODO_SUCCESS:
    case PENDING_TODO_SUCCESS:
    case DONE_TODO_SUCCESS:
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        description: [...state, action.payload],
        error: null
      }
    default:
      return state
  }
}
