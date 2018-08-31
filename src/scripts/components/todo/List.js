import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

const TodoList = ({ list, handleDelete, handleDone, handlePending }) => {
  const renderTodoList = (list, item) => {
    return (
      <Row
        key={item}
        list={list}
        item={item}
        handleDelete={handleDelete}
        handleDone={handleDone}
        handlePending={handlePending}
      />
    )
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>
            Descrição
          </th>
          <th>
            Ação
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map(renderTodoList)}
      </tbody>
    </table>
  )
}

TodoList.propTypes = {
  list: PropTypes.any,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  handlePending: PropTypes.func.isRequired
}
export default TodoList
