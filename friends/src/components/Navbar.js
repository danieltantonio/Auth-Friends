import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
      <div>
          <nav>
              <NavLink to='/Login'>Login</NavLink>
              <NavLink to='/Friends'>Friends</NavLink>
          </nav>
      </div>
  )
}

export default Navbar;
