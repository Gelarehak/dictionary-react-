import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Dictionary defaultWord="cat" />
        </div>
      </header>
      <footer>
        This project was coded by Gelareh Akasheh and is open-sourced on{" "}
        <a href="https://github.com/Gelarehak/dictionary-react-"> GitHub </a>
        and hosted on Netlify.
      </footer>
    </div>
  );
}
//https://dazzling-liskov-446b78.netlify.app/
