import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'

class User extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
    this.props.getRepos(this.props.match.params.login)
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
    }, repos, loading} = this.props

    return (
      <section className='user'>
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
                <a
                  href={html_url}
                  className='button is-light has-shadow'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='icon'>
                    <i className='fab fa-github'></i>
                  </span>
                  <span>Go to profile</span>
                </a>
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
                  {location && (
                    <p>
                      Location: <span className='lead'>{location}</span>
                    </p>
                  )}
                  {company && (
                    <p>
                      Company: <span className='lead'>{company}</span>
                    </p>
                  )}
                  {blog && (
                    <p>
                      Website:{' '}
                      <Link className='lead' to={blog}>
                        {blog}
                      </Link>
                    </p>
                  )}
                </div>
                {bio && (
                  <div className='my-1'>
                    <h3 className='is-size-4'>Bio</h3>
                    <p>{bio}</p>
                  </div>
                )}
                <div className='badges'>
                  <div className='tag is-info is-medium'>
                    <span className='mr'>Followers:</span>
                    <span className='lead'>{followers}</span>
                  </div>
                  <div className='tag is-info is-medium'>
                    <span className='mr'>Following:</span>
                    <span className='lead'>{following}</span>
                  </div>
                  <div className='tag is-dark is-medium'>
                    <span className='mr'>Public repos:</span>
                    <span className='lead'>{public_repos}</span>
                  </div>
                  <div className='tag is-dark is-medium'>
                    <span className='mr'>Public gists:</span>
                    <span className='lead'>{public_gists}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Repos repos={repos} />
      </section>
    )
  }
}

export default User
