import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../store/context';

const Article = () => {
  const { state: { currentArticle } } = useAppContext();
  const { title, urlToImage, content } = currentArticle || {};

  const handleBackClick = () => window.history.back();

  return (
    <StyledWrapper>
      {
        currentArticle ?
          <>
            <div className='article-title'>{title}</div>
            <div className='article-image'>
              <img  src={urlToImage} alt='' />
            </div>
            <div className='article-content'>{content}</div>
            <div className='back' onClick={handleBackClick}>&lt; Back to list</div>
          </> :
          <h3>NO ARTICLE DATA</h3>
      }
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px;

  .article-title {
    font-size: 24px;
    font-weight: bold;
  }
  .article-content,
  .back,
  .article-image {
    margin-top: 16px;
  }

  .article-image {
    width: 100%;
    height: 400px;
  }

  .article-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .article-content {
    font-size: 16px;
  }

  .back {
    width: fit-content;
    color: var(--nav-link-bg-color);
    cursor: pointer;
  }
`;

export default Article;