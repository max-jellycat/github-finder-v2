/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'

const Navbar  = ({ title, icon }) => {
  return (
    <nav
      className='navbar is-dark'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://bulma.io'>
          <i className={icon}></i>
          <span>{title}</span>
        </a>

        <a
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbar'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbar' className='navbar-menu'>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <a className='button is-primary is-outlined'>
                <span className='icon'>
                  <i className='fas fa-code-branch'></i>
                </span>
                <span>Fork me on Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
