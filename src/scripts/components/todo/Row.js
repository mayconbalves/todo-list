import React from 'react'
import PropTypes from 'prop-types'

const TodoRow = props => {
  const { list, item, handleDelete, handleDone, handlePending } = props
  console.log(list.done, 'estou aqui')
  return (
    <tr className='clickable'id={item} key={item}>
      {
        list.done === true &&
        <td className='align-center text-through'>{list.description}</td>
      }

      {
        list.done === false &&
        <td className='align-center'>{list.description}</td>
      }
      <td>
        <button
          type='button'
          className='btn btn-danger btn-margin'
          onClick={() => handleDelete(list)}>
          -
        </button>

        <button
          type='button'
          className='btn btn-success btn-margin'
          onClick={() => handleDone(list)}>
            Pronto
        </button>

        <button
          type='button'
          className='btn btn-warning btn-margin'
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
