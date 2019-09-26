/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    const { title, icon } = this.props
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
            <a className='navbar-item'>Home</a>

            <a className='navbar-item'>Documentation</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
