import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search  = ({ showClear, clearUsers, setAlert, searchUsers }) => {
  const [text, setText] = useState('')

  const handleChange = e => setText(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter some text', 'danger')
    } else {
      searchUsers(text)
      setText('')
    }
    
  }
  return (
    <section className='search mb-2'>
      <form onSubmit={handleSubmit}>
        <div className='field is-grouped'>
          <p className='control is-expanded'>
            <input
              type='text'
              className='input'
              name='text'
              placeholder='Search users...'
              value={text}
              onChange={handleChange}
            />
          </p>
          <p className='control'>
            <button
              type='submit'
              className='button is-success has-shadow'
            >
              <span className='icon'>
                <i className='fas fa-search'></i>
              </span>
              <span>Search</span>
            </button>
          </p>
        </div>
      </form>
      {showClear && (
        <button
          className='button is-light has-shadow ml'
          onClick={clearUsers}
        >
          <span className='icon'>
            <i className='fas fa-times'></i>
          </span>
          <span>Clear</span>
        </button>
      )}
    </section>
  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}

export default Search


