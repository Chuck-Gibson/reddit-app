import React, { useRef } from 'react';
import './App.css';
import Header from '../header/header';
import AllPosts from 'components/allPosts/AllPosts';
import Trending from 'components/trending/trending';

const App = () => {
  const rootNode = useRef();
  return (
    <div
      className='App'
      data-theme='dark'
      ref={rootNode}
    >
      <Header rootNode={rootNode} />
      <div className='main-container'>
        <Trending />
        <AllPosts />
      </div>
    </div>
  );
};

export default App;
