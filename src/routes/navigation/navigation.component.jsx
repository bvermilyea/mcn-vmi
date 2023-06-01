import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as McNeilusLogo } from '../../assets/mcneilusLogo.svg'

import './navigation.styles.scss'

const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation