import React from 'react';
import Header from '../Header';
import { useAppContext } from '../../../store/context';
import Navbar from '../Navbar';
import MenuWithCountries from '../MenuWithCountries';
import { act } from 'react-dom/test-utils';

jest.mock('../../../store/context');

describe('Header component', () => {
  useAppContext.mockReturnValue({
    state: {
      country: {
        value: 'gb',
        label: 'Great Britain'
      }
    }
  });

  describe('Horizontal', () => {
    it('should show navbar and countries in horizontal header', () => {
      const wrapper = mount(<Header />);
  
      expect(wrapper.find('.header.header-horizontal').exists()).toBe(true);
      expect(wrapper.find(Navbar).exists()).toBe(true);
      expect(wrapper.find(MenuWithCountries).exists()).toBe(true);
    });
  });

  describe('Vertical', () => {
    beforeEach(() => {
      act(() => {
        resizeWindow(500, 300);
      });
    });

    it('should not show navbar when navbar is collapsed', () => {
      const wrapper = mount(<Header />);
  
      expect(wrapper.find('.header.header-horizontal').exists()).toBe(false);
      expect(wrapper.find(Navbar).exists()).toBe(false);
      expect(wrapper.find(MenuWithCountries).exists()).toBe(true);
    });

    it('should show navbar when menu is expanded', () => {
      const wrapper = mount(<Header />);

      act(() => {
        wrapper.find(MenuWithCountries).props().toggleMenu();
      });
      wrapper.update();

      expect(wrapper.find(Navbar).exists()).toBe(true);
    });

    it('should switch header to vertical when screen width is expanded', () => {
      const wrapper = mount(<Header />);

      act(() => {
        resizeWindow(1200, 800);
      });
      wrapper.update();

      expect(wrapper.find('.header.header-horizontal').exists()).toBe(true);
    });
  })
});
