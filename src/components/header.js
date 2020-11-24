import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ siteTitle, menuLinks }) => (
  <div id='header' role='banner'>
    <div className='header-content'>
      <Navbar expand='md' >
        <h1 className='header-title'>
          <Link to='/' className='link-white'>{siteTitle}</Link>
        </h1>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto header-menu'>
          {
          menuLinks.map(link =>
            <li className='header-li' key={link.name}>
              <Link className='header-btn btn link-white' to={link.link}>{link.name}</Link>
            </li>)
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr className='header-white-line'/>
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
