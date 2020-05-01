import React, { useState, useEffect } from "react";
import Game from"./Game";
import TopNav from "../TopNav";

import "./SpeedCount.css";

const SpeedCount = (props) => {
  const [gameId, setGameId] = useState(1);
  return (
    <>
    <TopNav />
    <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </>
  );
};

export default SpeedCount;
