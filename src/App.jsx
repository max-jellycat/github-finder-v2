import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import './App.scss'

import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import About from './components/pages/About'

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({
      users: res.data.items,
      loading: false
    })
  }

  getUser = async username => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({
      user: res.data,
      loading: false
    })
  }

  clearUsers = () => this.setState({ users: [], loading: false })

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } })
  }

  clearAlert = () => {
    this.setState({ alert: null })
  }

  render() {
    const { users, user, loading } = this.state;

    return (
      <>
        <Router>
          <Navbar />
          <main className='section'>
            <div className='container'>
              <Alert alert={this.state.alert} clearAlert={this.clearAlert} />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <>
                      <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                      />
                      <Users loading={loading} users={users} />
                    </>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" render={props => (
                  <User { ...props } getUser={this.getUser} user={user} loading={loading} />
                )} />
              </Switch>
            </div>
          </main>
        </Router>
      </>
    )
  }
}

export default App
