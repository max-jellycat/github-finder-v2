import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'

import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import User from './components/users/User'

const App  = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <main className='section'>
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </main>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
