import React from 'react';
import Grid from '../Grid';
import Thumbnail from '../Thumbnail';

describe('Grid component', () => {
  it('should render articles thumbnails', () => {
    const articles = [{ title: '1' }];
    const wrapper = shallow(<Grid articles={articles} />);

    expect(wrapper.find(Thumbnail).exists()).toBe(true);
  });

  it('should not render thumbnails when there is not articles', () => {
    const wrapper = shallow(<Grid articles={[]} />);

    expect(wrapper.find(Thumbnail).exists()).toBe(false);
  });
});
