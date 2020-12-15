import React, { useState } from "react";
import Timer from "./Timer";
import {colors, utils} from "./utils";

const SunsDisplay = (props) => (
    <>
      {utils.range(1, props.count).map((sunId) => (
        <div key={sunId} className="sun" />
      ))}
    </>
);
  
const PlayNumber = (props) => (
<button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
>
    {props.number}
</button>
);

const PlayAgain = (props) => (
<div className="game-done">
    <div
    className="message"
    style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
    >
    {props.gameStatus === "lost" ? "Game Over" : "That was fast! You won!"}
    </div>
    <button id="play-again-btn" onClick={props.onClick}>Play Again</button>
</div>
);

// Custom Hook, Stateful Function
const useGameState = () => {
    const [suns, setSuns] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);
  
    const setGameState = (newCandidateNums) => {
      if (utils.sum(newCandidateNums) !== suns) {
        setCandidateNums(newCandidateNums);
      } else {
        const newAvailableNums = availableNums.filter(
          (n) => !newCandidateNums.includes(n)
        );
  
        //redraw suns (from what's available)
        setSuns(utils.randomSumIn(newAvailableNums, 9));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      }
    };
  
    return { suns, availableNums, candidateNums, secondsLeft, setSecondsLeft, setGameState };
};

const Game = (props) => {
    const {
      suns,
      availableNums,
      candidateNums,
      secondsLeft,
      setSecondsLeft,
      setGameState,
    } = useGameState();
  
    const candidatesAreWrong = utils.sum(candidateNums) > suns;
  
    const gameStatus =
      availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";
  
    const numberStatus = (number) => {
      if (!availableNums.includes(number)) {
        return "used";
      }
  
      if (candidateNums.includes(number)) {
        return candidatesAreWrong ? "wrong" : "candidate";
      }
  
      return "available";
    };
  
    const onNumberClick = (number, currStatus) => {
      // determine new status of number after being clicked
      if (currStatus === "used" || gameStatus !== "active") {
        return;
      }
  
      const newCandidateNums =
        currStatus === "available"
          ? candidateNums.concat(number)
          : candidateNums.filter((num) => num !== number);
  
      setGameState(newCandidateNums);
    };
  
    return (
      <>
        <div className="game">
          <div className="help">
            Count the Number of Suns!
          </div>
          <div className="body">
            <div className="left">
              {gameStatus !== "active" ? (
                <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
              ) : (
                <SunsDisplay count={suns} />
              )}
            </div>
            <div className="right">
              {utils.range(1, 9).map((number) => (
                <PlayNumber
                  key={number}
                  status={numberStatus(number)}
                  number={number}
                  onClick={onNumberClick}
                />
              ))}
            </div>
          </div>
          <Timer secondsLeft={secondsLeft} setSecondsLeft={setSecondsLeft} availableNums={availableNums} />
          <div className="help-note"><b>Note:</b> Select the number(s) that adds up to equal the count of the suns. You can also deselect a number you've selected by clicking on it again. </div>
        </div>
      </>
    );
};

export default Game;