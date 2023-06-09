import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as McNeilusLogo } from '../../assets/mcneilusLogo.svg'
import { UserContext } from '../../contexts/user.context'

import { signOutAuthUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  console.log('NAV CURRENT USER: ', currentUser)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <McNeilusLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/count">
            Count
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutAuthUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
