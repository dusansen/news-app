import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Thumbnail = ({ article: { title, description, urlToImage } }) => {
  return (
    <StyledWrapper>
      <article>
        <div className='article-title' title={title}>{title}</div>
        <div className='article-image'>
          <img  src={urlToImage} alt='' />
        </div>
        <div className='article-description'>{description}</div>
        <Link to={`/${title}`} className='more-link'>More ></Link>
      </article>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.article`
  width: 100%;
  box-shadow: 10px 10px 28px -9px rgba(0,0,0,0.61);
  border: 1px solid var(--secondary-bg-color);
  border-radius: 20px;
  cursor: pointer;

  article {
    display: flex;
    flex-direction: column;
    margin: 16px;
  }

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

  .more-link {
    display: flex;
    align-self: flex-end;
    width: fit-content;
    text-decoration: none;
    color: var(--nav-link-bg-color);
  }

  .more-link:visited {
    color: var(--nav-link-bg-color);
  }
`;

export default Thumbnail;