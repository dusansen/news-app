import React from 'react';
import Navbar from '../Navbar';
import NavLink from '../NavLink';

describe('Navbar', () => {
  it('should show Navigation links', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.find(NavLink).exists()).toBe(true);
    expect(wrapper.html()).toContain('Top News');
    expect(wrapper.html()).toContain('Categories');
    expect(wrapper.html()).toContain('Search');
  });
});
