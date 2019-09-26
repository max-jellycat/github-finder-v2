import React, { Component } from 'react'

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user

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
          <a href={html_url} className='button is-primary is-outlined my-1'>
            <span className='icon'>
              <i className='fas fa-eye'></i>
            </span>
            <span>More</span>
          </a>
        </div>
      </div>
    )
  }
}

export default UserItem
