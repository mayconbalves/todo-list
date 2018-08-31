import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render () {
    return (
      <main>
        <nav>
          <ul className='list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/todo-list'>Tarefas</Link></li>
          </ul>
        </nav>

      </main>
    )
  }
}

export default Menu
