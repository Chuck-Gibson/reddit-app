import React from 'react';
import './header.css';
import Searchbar from '../searchbar/searchBar';

function Header() {
    return(
        <div className='Header'>
            <img src='./redditlogo.png' id="logo" alt='logo'></img>
            <Searchbar/>
            <button id="sign-in">Sign in</button>
        </div>
    )
};

export default Header;