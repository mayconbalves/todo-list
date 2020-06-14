import {
  ADD_TODO_SUCCESS,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR
} from '../constants/actionTypes'

const initialState = {
  description: '',
  list: [],
  error: null
}

export default function todo (state = initialState, action) {
  switch (action.type) {
    case TODO_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null
      }
    case TODO_LIST_ERROR:
      return {
        list: [],
        error: action.payload
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        description: '',
        error: null
      }
    default:
      return state
  }
}
