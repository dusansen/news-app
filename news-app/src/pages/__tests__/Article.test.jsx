import React from 'react';
import Article from '../Article';
import { useAppContext } from '../../store/context';

jest.mock('../../store/context');

describe('Article page', () => {
  const currentArticle = {
    title: 'title',
    content: 'content',
    urlToImage: 'https://urltoimage.com'
  };
  useAppContext.mockReturnValue({
    state: {
      currentArticle
    }
  });
  it('should show NO ARTICLE DATA label when there is no article data', () => {
    useAppContext.mockReturnValueOnce({
      state: {
        currentArticle: null
      }
    });
    const wrapper = shallow(<Article />);

    expect(wrapper.html()).toContain('NO ARTICLE DATA');
  });

  it('should show title, image, content and back to list label', () => {
    const wrapper = shallow(<Article />);

    expect(wrapper.html()).toContain(currentArticle.title);
    expect(wrapper.html()).toContain(`src="${currentArticle.urlToImage}"`);
    expect(wrapper.html()).toContain(currentArticle.content);
    expect(wrapper.html()).toContain('Back to list');
  });

  it('should go to previous page when back to list is clicked', () => {
    const wrapper = shallow(<Article />);
    const backSpy = jest.spyOn(window.history, 'back');

    wrapper.find('.back').simulate('click');

    expect(backSpy).toHaveBeenCalled();
  });
});
