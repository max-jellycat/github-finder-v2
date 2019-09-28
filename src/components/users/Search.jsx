import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.text === '') {
      this.props.setAlert('Please enter some text', 'danger')
    } else {
      this.props.searchUsers(this.state.text)
      this.setState({ text: '' })
    }
    
  }

  render() {
    const { showClear, clearUsers } = this.props;
    const { text } = this.state
    return (
      <section className='search mb-2'>
        <form onSubmit={this.handleSubmit}>
          <div className='field is-grouped'>
            <p className='control is-expanded'>
              <input
                type='text'
                className='input'
                name='text'
                placeholder='Search users...'
                value={text}
                onChange={this.handleChange}
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
}

export default Search


