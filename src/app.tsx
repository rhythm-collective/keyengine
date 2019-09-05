import React from "react";
import Game from "./components/game";
import Functional from "./components/functional";
import sample from "./assets/sample.svg";
import "./app.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={sample}
          className="App-logo"
          alt="logo"
          height="160"
          width="160"
        />
      </header>
      <Game />
      <Functional />
    </div>
  );
};

export default App;
