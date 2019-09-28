import React, { Component } from 'react'
import axios from 'axios'

import './App.scss'

import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users'
import Search from './components/users/Search'

class App extends Component {
  state = {
    users: [],
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

  clearUsers = () => this.setState({ users: [], loading: false })

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } })
  }

  clearAlert = () => {
    this.setState({ alert: null })
  }

  render() {
    const { users, loading } = this.state;

    return (
      <>
        <Navbar />
        <main className='section'>
          <div className='container'>
            <Alert alert={this.state.alert} clearAlert={this.clearAlert} />
            <Search
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={users.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <Users loading={loading} users={users} />
          </div>
        </main>
      </>
    )
  }
}

export default App
