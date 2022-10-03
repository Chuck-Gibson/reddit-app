import React from 'react';
import './header.css';
import Searchbar from '../searchbar/searchBar';
import { ThemeSwitcher } from 'components/themeSwitcher/ThemeSwitcher';
import { ReactComponent as Logo } from 'assets/logo.svg';
import PropTypes from 'prop-types';

const Header = ({ rootNode }) => {
  return (
    <div className='Header'>
      <div className='app-logo'>
        <Logo />
      </div>
      <Searchbar />
      <div className='header--util'>
        <ThemeSwitcher node={rootNode} />
        <button
          className='btn--primary'
          id='sign-in'
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  rootNode: PropTypes.object.isRequired,
};
