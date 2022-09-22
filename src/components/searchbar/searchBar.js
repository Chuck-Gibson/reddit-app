import React, { useState } from 'react';
import { ReactComponent as Magnifier } from './assets/search.svg';
import { SearchInput } from './SearchInput';
import { SubmitButton } from './SubmitButton';
import './searchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const handleInputChange = (event) => {
    setSearchValue(() => event.target.value);
  };

  const handleSubmit = () => {
    // TODO: dispatch action here
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
