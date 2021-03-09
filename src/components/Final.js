import React from 'react'
import PropTypes from 'prop-types'
import { t } from 'react-switch-lang'

const Completed = ({ user }) => (
  <div>
    <p>
      {t('final.welcome')}, <b>{`${user.firstName} ${user.lastName}`}</b>{' '}
    </p>
    <p> {t('final.message')}</p>
  </div>
)

Completed.propTypes = {
  user: PropTypes.object,
}
export default Completed
