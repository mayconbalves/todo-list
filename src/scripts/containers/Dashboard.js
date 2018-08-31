import React, { Component } from 'react'
import Menu from '../components/utils/Menu'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <Menu />
        <header>
          <h1>Criei suas Tarefas</h1>
        </header>
      </div>
    )
  }
}

export default Dashboard
