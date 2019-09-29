import React, { useContext } from 'react'

import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
  const { alert, clearAlert } = useContext(AlertContext)
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

export default Alert
