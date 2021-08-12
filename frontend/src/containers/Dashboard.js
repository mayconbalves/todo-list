import React, { Component } from 'react'
import Menu from '../components/utils/Menu'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <Menu />
        <div className='container'>
          <h1>Crie suas Tarefas</h1>
        </div>
      </div>
    )
  }
}

export default Dashboard
