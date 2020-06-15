import React from 'react';
import App from '../App';

describe('App', () => {
  it('should ', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.html()).toContain('Test');
  });
});