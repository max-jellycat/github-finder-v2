import React, { useContext } from 'react'

import GithubContext from '../../context/github/githubContext'

import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const Users  = () => {
  const { loading, users } = useContext(GithubContext)

  return (
    <>
    {users.length > 0 ? (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className='users'>
            {users.map(user => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        )}
      </>
    ) : <p className="lead has-text-centered is-size-4">No users found... try another search!</p>}
    </>
  )
}

export default Users
