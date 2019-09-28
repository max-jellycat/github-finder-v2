import React from 'react'
import PropTypes from 'prop-types'

import RepoItem from './RepoItem'

const Repos = ({ repos }) => {
  return (
    <div className="user-repos mt-2">
      <h3 className="is-size-4 mb-1">Repositories</h3>
      {repos.length > 0 ? repos.map(repo => <RepoItem repo={repo} key={repo.id} />) : <p>This user has no repositories yet.</p>}
    </div>
  )
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default Repos
