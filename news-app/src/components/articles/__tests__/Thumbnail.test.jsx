import React from 'react';
import Thumbnail from '../Thumbnail';
import { useAppContext } from '../../../store/context';
import { Link } from '@reach/router';
import { SET_CURRENT_ARTICLE } from '../../../store/constants';

jest.mock('../../../store/context');

describe('Thumbnail component', () => {
  const dispatch = jest.fn();
  const article = {
    title: 'title',
    description: 'article description',
    urlToImage: 'https://urltoimage.com'
  }
  useAppContext.mockReturnValue({
    dispatch
  });

  it('should show title, image, description and link button', () => {
    const wrapper = shallow(<Thumbnail article={article} />);

    expect(wrapper.html()).toContain(article.title);
    expect(wrapper.html()).toContain(article.description);
    expect(wrapper.html()).toContain(`src="${article.urlToImage}"`);
    expect(wrapper.find(Link).exists()).toBe(true);
    expect(wrapper.html()).toContain('More &gt');
  });

  it('should save article in store when button more is clicked', () => {
    const wrapper = shallow(<Thumbnail article={article} />);

    wrapper.find(Link).simulate('click');

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_CURRENT_ARTICLE,
      payload: article
    });
  });
});
