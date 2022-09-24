import React from 'react';
import './App.css';
import Header from '../header/header';
import AllPosts from 'components/allPosts/AllPosts';
import Trending from 'components/trending/trending';
import { useLocalStorage } from 'hooks/useLocalStorage';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const toggleTheme = () => {
    if (theme === 'dark') setTheme(() => 'light');
    else setTheme(() => 'dark');
  };

  return (
    <div
      className='App'
      data-theme={theme}
    >
      <Header
        theme={theme}
        handleThemeToggle={toggleTheme}
      />
      <div className='main-container'>
        <Trending />
        <AllPosts />
      </div>
    </div>
  );
};

export default App;
