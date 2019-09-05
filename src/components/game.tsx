import React from "react";
import "./game.css";
import GameControl from "./renderer";
import Processor from "./processor";

const Game: React.FC = () => {
  return (
    <div className="Game">
      <Processor />
      <GameControl />
    </div>
  );
};

export default Game;
