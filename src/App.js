import React, { Component } from 'react'
import './App.scss'

import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section className='section'>
          <h1 className='title'>Hello World</h1>
          <h2 className='subtitle'>What's up?</h2>
          <div className='control'>
            <input type='text' className='input' />
          </div>
        </section>
      </>
    )
  }
}

export default App
