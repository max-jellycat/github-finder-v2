import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className='has-text-centered'>
      <h2 className='title has-text-dark'>
        <span className='icon mr-1'>
          <i className='fas fa-grin-beam-sweat'></i>
        </span>
        <span>Oopsie, it seems you don't belong here!</span>
      </h2>
      <Link to='/' className='button is-dark has-shadow mt-1'>
        <span className='icon'>
          <i className="fas fa-arrow-left"></i>
        </span>
        <span>Back</span>
      </Link>
    </div>
  )
}

export default NotFound
