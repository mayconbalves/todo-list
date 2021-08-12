import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Col from '../utils/Col'

class TodoForm extends Component {
  constructor (props) {
    super(props)

    this.state = { description: '' }
  }

  handleChange = event => {
    this.setState({ description: event.target.value })
  }

  handleConfirm = () => {
    const { handleAdd } = this.props
    const { description } = this.state

    handleAdd(description)
    this.setState({ description: '' })
  }

  render () {
    const { description } = this.state

    return (
      <form>
        <div className='container margin-top-double'>
          <div className='row'>
            <Col className='col-6'>
              <input
                id='description'
                className='form-control'
                onChange={this.handleChange}
                placeholder='Adicione uma tarefa'
                value={description}
              />
            </Col>
            <Col className='col-4'>
              <button
                type='button'
                className='btn btn-primary'
                disabled={!description}
                onClick={this.handleConfirm}>
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
  handleAdd: PropTypes.func.isRequired
}

export default TodoForm
