import React from 'react'

import PropTypes from 'prop-types'

const RepoItem = ({ repo: { name, description, html_url, language } }) => {
  return (
    <div className='card user-repos--item'>
      <div className='card-content user-repos--item-wrapper'>
        <div className='user-repos--item-info'>
          <div className='user-repos--item-header'>
            <h4 className='is-size-5 mr-1'>{name}</h4>
            {language && (
              <div className='tag is-primary lead'>{language}</div>
            )}
          </div>
          {description && <p className='mt'>{description}</p>}
        </div>
        <a href={html_url} className='button is-dark is-outlined' target="_blank" rel="noopener noreferrer">
          <span className='icon'>
            <i className='fab fa-github'></i>
          </span>
          <span>Check</span>
        </a>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
