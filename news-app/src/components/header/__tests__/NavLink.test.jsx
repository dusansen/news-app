import React from 'react';
import NavLink from '../NavLink';
import { Link } from '@reach/router';

describe('Navlink component', () => {
  it('should render Link component', () => {
    const wrapper = shallow(<NavLink to='/'/>);

    expect(wrapper.find(Link).exists()).toBe(true);
  });
});
