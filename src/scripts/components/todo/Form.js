import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoForm extends Component {
  super (props) {
    constructor(props)

    this.state = { show: false }
  }

  render () {
    return (
      <form>
        <div className='row'>
          <div className='col'>
            <input
              id='description'
              className='form-control'
              placeholder='Adicione uma tarefa'
            />
          </div>
          <div className='col'>
            <button type='button' className='btn btn-primary'>+</button>
          </div>
        </div>
      </form>
    )
  }
}

export default TodoForm
