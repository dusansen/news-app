import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      style: {
        backgroundColor: isCurrent ? '#FF5D73' : 'inherit',
        color: '#FFFFFF'
      }
    })}
  />
);

export default NavLink;