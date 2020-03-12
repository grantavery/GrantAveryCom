import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <div id='footer'>
    <div className='footer-content'>
        <Link className='footer-link' title='Grant Avery' rel='home'
          to='/'>
          Grant Avery
        </Link>&nbsp;&middot; learnin&#039; stuff
    </div>
  </div>
)

export default Footer
