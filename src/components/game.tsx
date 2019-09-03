import React from "react";
import "./game.css";
import GameControl from "./renderer";

const Game: React.FC = () => {
  return (
    <div className="Game">
      <GameControl />
    </div>
  );
};

export default Game;
