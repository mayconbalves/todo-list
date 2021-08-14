import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

const TodoList = ({ list, handleDelete, handleDone, handlePending }) => {
  const renderTodoList = (list, item) => (
    <Row
      key={item}
      list={list}
      item={item}
      handleDelete={handleDelete}
      handleDone={handleDone}
      handlePending={handlePending}
    />
  )

  return (
    <table className="table margin-top-double container">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="fixe-width">Ação</th>
        </tr>
      </thead>
      <tbody>{list.map(renderTodoList)}</tbody>
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
