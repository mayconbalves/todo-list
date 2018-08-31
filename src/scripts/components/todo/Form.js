import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Col from '../utils/Col'

class TodoForm extends Component {
  super (props) {
    constructor(props)

    this.state = { show: false }
  }

  render () {
    return (
      <form>
        <div className='row'>
          <Col xs={10} sm={10} md={10}>
            <input
              id='description'
              className='form-control'
              placeholder='Adicione uma tarefa'
            />
          </Col>
          <Col xs={2} sm={2} md={2}>
            <button type='button' className='btn btn-primary'>+</button>
          </Col>
        </div>
      </form>
    )
  }
}

export default TodoForm
