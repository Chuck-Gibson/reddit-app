import React from 'react';
import './header.css';
import Searchbar from '../searchbar/searchBar';
import { ThemeSwitcher } from 'components/themeSwitcher/ThemeSwitcher';
import { ReactComponent as Logo } from 'assets/logo.svg';

const Header = ({ theme, handleThemeToggle }) => {
  return (
    <div className='Header'>
      <div class='app-logo'>
        <Logo />
      </div>
      <Searchbar />
      <div class='header--util'>
        <ThemeSwitcher
          currentTheme={theme}
          handleClick={handleThemeToggle}
        />
        <button id='sign-in'>Sign in</button>
      </div>
    </div>
  );
};

export default Header;
