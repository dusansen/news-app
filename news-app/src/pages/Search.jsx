import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../store/context';
import { debounce } from 'debounce';
import useApi from '../hooks/useApi';
import ShowArticles from '../components/articles/ShowArticles';
import { SEARCH_CATEGORY } from '../utils/constants';

const Search = () => {
  const { state: { country } } = useAppContext();
  const { getArticles } = useApi();

  const debounceSearch = debounce(event => {
    const { value } = event.target;
    getArticles({
      country: country.value,
      q: value
    });
  }, 500);

  const handleChange = event => {
    event.persist();
    debounceSearch(event);
  };

  return (
    <StyledWrapper>
      <div className='page-title'>Search top news from {country.label} by term</div>
      <input
        className='search-input'
        type='search'
        placeholder='Search term...'
        onChange={handleChange} />
      <ShowArticles category={SEARCH_CATEGORY}/>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 32px;

  .page-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  .search-input {
    width: 50%;
    height: 40px;
    line-height: 40ex;
    font-size: 16px;
    padding: 0 16px;
    margin-bottom: 32px;
  }
`;

export default Search;