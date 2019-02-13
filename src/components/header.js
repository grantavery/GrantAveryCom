import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div id='header'>
    <div className='header-content'>
      <h1 className='header-title'>
        <Link to='/' className='link-white'>{siteTitle}</Link>
      </h1>
      <hr/>
      <div className='header-menu'>
        <ul className='header-ul'>
          <li className='header-li'>
          <Link className='header-btn btn link-white' to='/'>Home</Link>
          </li>
          <li className='header-li'>
          <Link className='header-btn btn link-white' to='/links'>Links</Link>
          </li>
          <li className='header-li'>
          <Link className='header-btn btn link-white' to='/contact'>Contact</Link>
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
