import React from 'react'
import PropTypes from 'prop-types'

const TodoRow = ({ list, item, handleDelete, handleDone, handlePending }) => (
  <tr className="clickable" id={item} key={item}>
    {list.done === true && <td className="align-center">{list.description}</td>}

    {list.done === false && (
      <td className="align-center">{list.description}</td>
    )}
    <td>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleDelete(list._id)}
      >
        Apagar
      </button>

      {list.done === true && (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleDone(list)}
        >
          Pronto
        </button>
      )}

      {list.done === false && (
        <button
          type="button"
          className="btn btn-success btn-margin"
          onClick={() => handleDone(list)}
        >
          Pronto
        </button>
      )}

      {list.done === true && (
        <button
          type="button"
          className="btn btn-warning btn-margin"
          onClick={() => handlePending(list)}
        >
          Refazer
        </button>
      )}
    </td>
  </tr>
)

TodoRow.propTypes = {
  list: PropTypes.object.isRequired,
  item: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  handlePending: PropTypes.func.isRequired
}

export default TodoRow
