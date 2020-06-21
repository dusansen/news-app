import React from 'react';
import MenuWithCountries from '../MenuWithCountries';
import { useAppContext } from '../../../store/context';
import Country from '../Country';

jest.mock('../../../store/context');

describe('MenuWithCountries', () => {
  const country = {
    value: 'gb',
    label: 'Great Britain'
  };
  useAppContext.mockReturnValue({
    state: {
      country
    }
  });

  it('should show countries selector and menu with hamburger icon', () => {
    const wrapper = shallow(<MenuWithCountries />);

    expect(wrapper.find(Country).exists()).toBe(true);
    expect(wrapper.html()).toContain('src="menu.svg"');
  });

  it('should show close icon when menu is expanded', () => {
    const wrapper = shallow(<MenuWithCountries expanded={true} />);

    expect(wrapper.html()).toContain('src="close.svg"');
  });

  it('should toggleMenu when hamburger or close icon is clicked', () => {
    const toggleMenu = jest.fn();
    const wrapper = shallow(<MenuWithCountries expanded={false} toggleMenu={toggleMenu} />);

    wrapper.find('img').simulate('click');

    expect(toggleMenu).toHaveBeenCalled();
  });

  it('should not show menu icon', () => {
    const wrapper = shallow(<MenuWithCountries showMenu={false} />);

    expect(wrapper.find('img').exists()).toBe(false);
  });
});
