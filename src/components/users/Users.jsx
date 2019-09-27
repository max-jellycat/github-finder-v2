import React from 'react'
import PropTypes from 'prop-types'

import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const Users  = ({ loading, users }) => {
    return (
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
    )
}

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
}

export default Users
