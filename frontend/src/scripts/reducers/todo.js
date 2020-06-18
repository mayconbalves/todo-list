import {
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR
} from '../constants/actionTypes'

const initialState = {
  description: '',
  error: null
}

export default function todo (state = initialState, action) {
  switch (action.type) {
    case TODO_LIST_SUCCESS:
      return {
        ...state,
        description: action.payload,
        error: null
      }
    case TODO_LIST_ERROR:
      return {
        description: [],
        error: action.payload
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        description: [...state, action.payload],
        error: null
      }
    case ADD_TODO_ERROR:
      return {
        description: [],
        error: action.payload
      }
    default:
      return state
  }
}
