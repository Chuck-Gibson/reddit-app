import React, { useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import PropTypes from 'prop-types';

export const ThemeSwitcher = ({ currentTheme, handleClick, _className }) => {
  return (
    <>
      <button
        className={_className}
        onClick={handleClick}
      >
        {currentTheme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </>
  );
};

ThemeSwitcher.propTypes = {};
