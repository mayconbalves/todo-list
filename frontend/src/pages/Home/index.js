import React, { Component } from 'react'
import Navbar from '../../components/Navbar'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Crie suas Tarefas</h1>
        </div>
      </div>
    )
  }
}

export default Home
