import { createContext, useEffect, useState, useRef } from "react";

const NUM_HOLES = 9;
const TIME_LIMIT = 10;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [holes, setHoles] = useState();
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [time, setTime] = useState(TIME_LIMIT);
  const [playing, setPlaying] = useState(false);
  const timer = useRef();

  useEffect(() => {
    if (time <= 0 && playing) {
      stop();
    }
  }, [time, playing]);

  const start = () => {
    setScore(0);
    setPlaying(true);
    setHoles(makeHoles());
    timer.current = setInterval(
      () => setTime((prevTime) => prevTime - 1),
      1000
    );
  };

  const stop = () => {
    setPlaying(false);

    const newScores = [...highScores, score].sort((a, z) => z - a);
    setHighScores(newScores.slice(0, 5));

    clearInterval(timer.current);
    setTime(TIME_LIMIT);
  };

  //   const newScores = [...highScores, score].sort((a, z) => z - a);
  //   setHighScores(newScores.slice(0, 5));

  const hop = () => {
    setScore((prevScore) => prevScore + 1);
    setHoles(makeHoles(holes));
  };

  const value = {
    holes,
    score,
    highScores,
    time,
    timeLimit: TIME_LIMIT,
    playing,
    start,
    stop,
    hop,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

function makeHoles(prev = []) {
  const newField = Array(NUM_HOLES).fill(false);
  let bunny = Math.floor(Math.random() * NUM_HOLES);
  while (prev[bunny]) {
    bunny = Math.floor(Math.random() * NUM_HOLES);
  }
  newField[bunny] = true;
  return newField;
}

export default GameContext;
