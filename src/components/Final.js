import React from 'react'
import PropTypes from 'prop-types'

const Completed = ({ user }) => (
  <div>
    <p>
      Welcome, <b>{`${user.firstName} ${user.lastName}`}</b>{' '}
    </p>
    <p> You have successfully registered</p>
  </div>
)

Completed.propTypes = {
  user: PropTypes.object,
}
export default Completed
