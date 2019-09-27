import React, { Component } from 'react'
import './App.scss'

import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section className='section'>
          <div className='container'>
            <Users />
            <button className="button is-success is-rounded">Test</button>
          </div>
        </section>
      </>
    )
  }
}

export default App
