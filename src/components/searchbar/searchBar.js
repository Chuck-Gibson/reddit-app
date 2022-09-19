import React from "react";
import { ReactComponent as Magnifier } from "./assets/search.svg";
import { SearchInput } from "./SearchInput";
import "./searchBar.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      {/* <Magnifier /> */}
      <SearchInput />
    </div>
  );
}

export default SearchBar;
