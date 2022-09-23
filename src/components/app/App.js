import React from 'react';
import './App.css';
import Header from '../header/header';
import AllPosts from 'components/allPosts/AllPosts';
import Trending from 'components/trending/trending';

const App = () => {
  return (
    <div
      className='App'
      data-theme='dark'
    >
      <Header />
      <div className='main-container'>
        <Trending />
        <AllPosts />
      </div>
    </div>
  );
};

export default App;
