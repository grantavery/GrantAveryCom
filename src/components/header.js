import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div id="header">
    <div className="header-content">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="link-white">
          {siteTitle}
        </Link>
      </h1>
      <div className="menu">
        <ul className="header-ul">
          <li className="header-li">
          <Link className="header-link link-white" to="/">Home</Link>
          </li>
          <li className="header-li">
          <Link className="header-link link-white" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
