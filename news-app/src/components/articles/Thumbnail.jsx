import React from 'react';
import styled from 'styled-components';

const Thumbnail = ({ article: { title, description, urlToImage } }) => {
  return (
    <StyledWrapper>
      <div className='article-title' title={title}>{title}</div>
      <div className='article-image'>
        <img  src={urlToImage} alt='' />
      </div>
      <div className='article-description'>{description}</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.61);
  border-radius: 20px;
  padding: 16px;
  cursor: pointer;

  .article-title {
    height: 60px;
    max-height: 60px;
    overflow-y: hidden;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.02em;
  }

  .article-image {
    width: 100%;
    margin-top: 8px;
    height: 200px;
  }

  .article-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .article-description {
    margin-top: 8px;
    height: 80px;
    max-height: 80px;
    overflow-y: hidden;
    line-height: 20px;
    font-size: 14px;
    letter-spacing: 0.02em;
  }
`;

export default Thumbnail;