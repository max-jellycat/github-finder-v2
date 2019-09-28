import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Spinner from '../layout/Spinner'
import { checkServerIdentity } from 'tls'

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }

  render() {
    const { user: { 
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    }, loading} = this.props

    return (
      <section className="user">
        <Link to='/' className='button is-dark has-shadow mb-2'>
          <span className='icon'>
            <i className='fas fa-arrow-left'></i>
          </span>
          <span>Back</span>
        </Link>
        <div className='user card'>
          {loading ? (
            <Spinner />
          ) : (
            <div className='card-content is-flex'>
              <div className='user-avatar mr-2'>
                <figure className='image is-128x128 mb-1'>
                  <img className='is-rounded' src={avatar_url} alt={login} />
                </figure>
                <Link to={html_url} className='button is-light has-shadow'>
                  <span className='icon'>
                    <i className='fab fa-github'></i>
                  </span>
                  <span>Go to profile</span>
                </Link>
              </div>
              <div className='user-info'>
                <div className='user-header'>
                    <h1 className='title'>{name}</h1>
                    <h2 className='subtitle'>{login}</h2>
                </div>
                <div className='my-1'>
                  <div className='user-info--hireable'>
                    <span className='mr-1'>Hireable: </span>
                    {hireable ? (
                      <i className='fas fa-check has-text-success is-size-5' />
                    ) : (
                      <i className='fas fa-times has-text-danger is-size-5' />
                    )}
                  </div>
                  <p>
                    Location: <span className="lead">{location}</span>
                  </p>
                  <p>Company: <span className="lead">{company}</span></p>
                  <p>Website: <Link className="lead" to={blog}>{blog}</Link></p>
                </div>
                <div className='my-1'>
                  <h3 className='is-size-4'>Bio</h3>
                  <p>{bio}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default User
