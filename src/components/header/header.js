import React from "react";
import "./header.css";
import Searchbar from "../searchbar/searchBar";
import { ReactComponent as Logo } from "assets/logo.svg";

function Header() {
  return (
    <div className="Header">
        <Logo />
        <Searchbar />
        <button id="sign-in">Sign in</button>
    </div>
  );
}

export default Header;
