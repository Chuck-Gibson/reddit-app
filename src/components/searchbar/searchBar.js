import React, { useState } from 'react';
import { ReactComponent as Magnifier } from './assets/search.svg';
import { SearchInput } from './SearchInput';
import { SubmitButton } from './SubmitButton';
import { searchPosts } from 'store/slices/userPosts/asyncThunks/searchPosts';
import { useDispatch } from 'react-redux';

import './searchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('posts');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  const handleSubmit = () => {
    const searchParams = {
      search: searchValue,
      type: searchType,
    };

    dispatch(searchPosts(searchParams));
    setSearchValue(() => '');
  };

  return (
    <div className='SearchBar'>
      <SearchInput
        handleChange={handleInputChange}
        value={searchValue}
      />
      <SubmitButton
        handleSubmit={handleSubmit}
        _className={searchValue ? 'has-text' : null}
      >
        <Magnifier />
      </SubmitButton>
    </div>
  );
}

export default SearchBar;
