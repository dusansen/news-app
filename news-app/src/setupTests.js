import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

configure({ adapter: new Adapter() });

global.expect = expect;
global.shallow = shallow;
global.mount = mount;