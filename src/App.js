import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="header">What word do you want to look up?</h1>
          <Dictionary />
        </div>
      </header>
    </div>
  );
}
