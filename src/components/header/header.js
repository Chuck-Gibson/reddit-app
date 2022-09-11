import React from 'react';
import './header.css';
import Searchbar from '../searchbar/searchBar';

function Header() {
    return(
        <div className='Header'>
            <img id="logo" alt='logo'></img>
            <Searchbar/>
        </div>
    )
};

export default Header;