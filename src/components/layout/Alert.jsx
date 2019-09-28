import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ alert, clearAlert }) => {
  return (
    alert !== null && (
      <article className={`notification is-${alert.type}`}>
        <button className="delete" onClick={clearAlert}></button>
        <span className='icon'>
          <i className={`fas fa-${alert.type === 'danger' || alert.type === 'warning' ? 'exclamation-triangle' : 'info-circle'} mr-1`}></i>
        </span>
        <span>{alert.message}</span>
      </article>
    )
  )
}

Alert.propTypes = {
  alert: PropTypes.object,
  clearAlert: PropTypes.func.isRequired,
}

export default Alert
