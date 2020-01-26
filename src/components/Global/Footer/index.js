import React from 'react';

const Footer = () => (
  <footer className='footer-container'>
    <nav className='navbar navbar-light bg-faded'>
      <a className='navbar-brand text-danger font-weight-bold' href='/'>
        Concierge
      </a>
      <p className='text-muted lead' href='#'>
        &copy;2020. All Rights Reserved by Texas Honey Badgers.
      </p>
      <a
        className='navbar-brand text-muted'
        href='https://texashoneybadgers.com'
      >
        github
      </a>
    </nav>
  </footer>
);

export default Footer;
