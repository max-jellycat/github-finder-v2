import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import About from './components/pages/About'

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
                <Route
                  exact
                  path='/'
                  render={props => (
                    <>
                      <Search />
                      <Users />
                    </>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                )} />
              </Switch>
            </div>
          </main>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
