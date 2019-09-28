import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {

  return (
    <div className='card'>
      <div className='card-content users-item'>
        <figure className='image is-64x64'>
          <img
            src={avatar_url}
            className='image is-64x64 is-rounded'
            alt={login}
          />
        </figure>
        <h3 className='title is-size-5 has-text-weight-bold pt'>{login}</h3>
        <a href={html_url} className='button is-primary has-shadow my-1'>
          <span className='icon'>
            <i className='fas fa-eye'></i>
          </span>
          <span>More</span>
        </a>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
