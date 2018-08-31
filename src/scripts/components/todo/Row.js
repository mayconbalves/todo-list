import React from 'react'
import PropTypes from 'prop-types'

const TodoRow = props => {
  const { list, item, handleDelete, handleDone, handlePending } = props
  return (
    <tr className='clickable'id={item} key={item}>
      <td className='align-center'>{list.description}</td>
      <td>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => handleDelete(list)}>
          -
        </button>

        <button
          type='button'
          className='btn btn-success'
          onClick={() => handleDone(list)}>
            Pronto
        </button>

        <button
          type='button'
          className='btn btn-warning'
          onClick={() => handlePending(list)}>
            Refazer
        </button>
      </td>
    </tr>
  )
}

TodoRow.propTypes = {
  list: PropTypes.object.isRequired,
  item: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  handlePending: PropTypes.func.isRequired
}

export default TodoRow
