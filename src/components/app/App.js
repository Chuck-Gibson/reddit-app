import React from "react";
import "./App.css";
import Header from "../header/header";
import AllPosts from "components/allPosts/AllPosts";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <AllPosts />
      </div>
    </div>
  );
}

export default App;
