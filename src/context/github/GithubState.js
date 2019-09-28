import React, { useReducer } from 'react'
import axios from 'axios'

import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  CLEAR_ALERT
} from '../types'

const GithubState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  // Search users

  // Get user

  // Get repos

  // Clear users

  // Set loading

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading
    }}
  >
    {children}
  </GithubContext.Provider>
}

export default GithubState