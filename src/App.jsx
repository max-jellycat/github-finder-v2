import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'

import GithubState from './context/github/GithubState'

import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import About from './components/pages/About'

const App  = () => {
  const [alert, setAlert] = useState(null)

  const createAlert = (message, type) => {
    setAlert({ message, type })
  }

  const clearAlert = () => {
    setAlert(null)
  }
  
  return (
    <GithubState>
      <Router>
        <Navbar />
        <main className='section'>
          <div className='container'>
            <Alert alert={alert} clearAlert={clearAlert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <>
                    <Search
                      setAlert={createAlert}
                    />
                    <Users />
                  </>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              )} />
            </Switch>
          </div>
        </main>
      </Router>
    </GithubState>
  )
}

export default App
