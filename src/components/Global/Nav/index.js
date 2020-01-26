import React from 'react';
import { NavLink } from 'react-router-dom';

import cityLogo from '@/assets/chicagoWhite.png';

const Nav = () => (
  <div>
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/' className='logo navItem'>
            <img
              style={{
                width: 60,
                height: 60,
              }}
              src={cityLogo}
              alt='img'
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
