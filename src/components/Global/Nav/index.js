import React from "react";
import { NavLink } from "react-router-dom";

import netflixLogo from "@/assets/img/Netflix-logo.png";

const Nav = () => (
  <div>
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="logo navItem">
            <img
              style={{
                width: 110,
                height: 30
              }}
              src={netflixLogo}
              alt="img"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
