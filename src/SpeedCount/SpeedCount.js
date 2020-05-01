import React, { useState, useEffect } from "react";
import TopNav from "../TopNav";
import "./SpeedCount.css";

// v1 STAR MATCH - Starting Template
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

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

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

  return { suns, availableNums, candidateNums, secondsLeft, setGameState };
};

const Game = (props) => {
  const {
    suns,
    availableNums,
    candidateNums,
    secondsLeft,
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
    // determine is new status of number after being clicked
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
      <TopNav />
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
        <div className="timer">Time Remaining: <span id="timer-number">{secondsLeft}</span></div>
        <div className="help-note"><b>Note:</b> Select multiple numbers to add them to equal the count of the suns. You can also deselect a number you've selected by clicking on it again. </div>
      </div>
    </>
  );
};

// Color Theme
const colors = {
  available: "rgb(85, 38, 0)",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

// Math science
const utils = {
  // Sum an array
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

const SpeedCount = (props) => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default SpeedCount;
