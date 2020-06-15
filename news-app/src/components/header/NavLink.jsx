import React from 'react';
import { Link } from '@reach/router';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      style: {
        color: '#FFFFFF',
        height: '100%',
        minWidth: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        backgroundColor: isCurrent ? 'var(--nav-link-bg-color)' : 'inherit',
        textDecoration: 'none'
      }
    })}
  />
);

export default NavLink;