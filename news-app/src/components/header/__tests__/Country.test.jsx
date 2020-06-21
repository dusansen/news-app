import React from 'react';
import { useAppContext } from '../../../store/context';
import Country from '../Country';
import { SET_COUNTRY } from '../../../store/constants';

jest.mock('../../../store/context');

describe('Country component', () => {
  const country = {
    value: 'gb',
    label: 'Great Britain'
  };
  const dispatch = jest.fn();
  useAppContext.mockReturnValue({
    dispatch
  });

  it('should show country short name', () => {
    const wrapper = shallow(<Country country={country} />);

    expect(wrapper.html()).toContain(country.value);
  });

  it('should mark country as selected', () => {
    const wrapper = shallow(<Country country={country} selected={true} />);

    expect(wrapper.html()).toContain('selected-country');
  });

  it('should save country to store when it is clicked', () => {
    const wrapper = shallow(<Country country={country} />);

    wrapper.simulate('click');

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_COUNTRY,
      payload: country
    });
  });
});
