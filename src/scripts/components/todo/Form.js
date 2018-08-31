import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Col from '../utils/Col'

class TodoForm extends Component {
  constructor (props) {
    super(props)

    this.state = { show: false }
  }

  render () {
    const { description, handleAdd, handleChange } = this.props

    return (
      <form>
        <div className='container'>
          <div className='row'>
            <Col className='col-8'>
              <input
                id='description'
                className='form-control'
                onChange={handleChange}
                placeholder='Adicione uma tarefa'
                value={description}
              />
            </Col>
            <Col className='col-4' md={4}>
              <button
                type='button'
                className='btn btn-primary'
                onClick={handleAdd}>
                +
              </button>
            </Col>
          </div>
        </div>
      </form>
    )
  }
}

TodoForm.propTypes = {
  description: PropTypes.string,
  handleAdd: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default TodoForm
