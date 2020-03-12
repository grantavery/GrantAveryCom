import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ siteTitle, menuLinks }) => (
  <div id='header'>
    <div className='header-content'>
      <h1 className='header-title'>
        <Link to='/' className='link-white'>{siteTitle}</Link>
      </h1>
      <hr/>
      <nav className='header-menu' style={{display:'flex', flex:1 }}>
        <ul className='header-ul'>
        {
          menuLinks.map(link =>
            <li className='header-li' key={link.name}>
              <Link className='header-btn btn link-white' to={link.link}>{link.name}</Link>
            </li>)
        }
        </ul>
      </nav>
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
