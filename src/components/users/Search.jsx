import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.text)
  }

  render() {
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
                placeholder='Search users'
                value={text}
                onChange={this.handleChange}
              />
            </p>
            <p className='control'>
              <button
                type='submit'
                className='button is-success is-lighter has-shadow'
              >
                <span className='icon'>
                  <i className='fas fa-search'></i>
                </span>
                <span>Search</span>
              </button>
            </p>
          </div>
        </form>
      </section>
    )
  }
}

export default Search


