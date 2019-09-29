import React, { useReducer } from 'react'

import AlertContext from './alertContext'
import AlertReducer from './alertReducer'

import {
  SET_ALERT,
  CLEAR_ALERT
} from '../types'

const AlertState = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const setAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: {
      message,
      type
    } })
  }

  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT })
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
        clearAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertState
