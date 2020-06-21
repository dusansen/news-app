import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

configure({ adapter: new Adapter() });

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}

global.expect = expect;
global.shallow = shallow;
global.mount = mount;
global.resizeWindow = resizeWindow;
