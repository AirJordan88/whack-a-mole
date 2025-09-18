import { useContext } from "react";
import GameContext from "../game/GameContext";

export default function Welcome() {
  const { start, highScores } = useContext(GameContext);
  return (
    <>
      <section className="welcome">
        <p>Welcome to Whack-a-Mole!</p>
        <p>
          Whack the mole to score points. Score as much as you can before time
          runs out.
        </p>
        <button onClick={start}>Play</button>
      </section>
      <section className="highscores">
        <h2>High Scores</h2>
        <ul>
          {highScores.length > 0 ? (
            highScores.map((score, i) => <li key={i}>{score}</li>)
          ) : (
            <li>None yet... Play the game!</li>
          )}
        </ul>
      </section>
    </>
  );
}
