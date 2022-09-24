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
      <button onClick={toggleTheme}>
        {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </>
  );
};

ThemeSwitcher.propTypes = {
  node: PropTypes.object.isRequired,
};
