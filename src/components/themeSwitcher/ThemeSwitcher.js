import React, { useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const ThemeSwitcher = ({ node }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const toggleTheme = () => {
    if (theme === 'dark') setTheme(() => 'light');
    else setTheme(() => 'dark');
  };

  useEffect(() => {
    node.current.dataset.theme = theme;
  }, [theme, node]);

  return (
    <>
    <label className="theme-switch" for="checkbox">
      <input type="checkbox" id="checkbox" onClick={toggleTheme}/>
      <span class="slider-round">
        {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}</span>
    </label>
    </>
  );
};

ThemeSwitcher.propTypes = {
  node: PropTypes.object.isRequired,
};
