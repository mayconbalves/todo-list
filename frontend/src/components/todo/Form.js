import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.state = { description: '' }
  }

  handleChange = (event) => {
    this.setState({ description: event.target.value })
  }

  handleConfirm = () => {
    const { handleAdd } = this.props
    const { description } = this.state

    handleAdd(description)
    this.setState({ description: '' })
  }

  render() {
    const { description } = this.state

    return (
      <form>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <input
                id="description"
                className="form-control"
                onChange={this.handleChange}
                placeholder="Adicione uma tarefa"
                value={description}
              />
            </div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-primary"
                disabled={!description}
                onClick={this.handleConfirm}
              >
                +
              </button>
            </div>
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
