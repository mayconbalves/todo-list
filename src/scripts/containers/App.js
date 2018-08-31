import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Todo List</h1>
        </header>
        <nav>
          <ul>
            <li><Link to='/todo-list'>Todo-List</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default App
