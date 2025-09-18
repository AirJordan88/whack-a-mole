import { useContext } from "react";
import GameContext from "../game/GameContext";
import Hole from "./Hole";

export default function HoleGrid() {
  const { holes } = useContext(GameContext);
  //   console.log("holes", holes);
  //   return <h1>Hole Grid</h1>;
  console.log(holes);
  return (
    <ul className="field">
      {holes.map((hasBunny, index) => (
        <Hole key={index} hasBunny={hasBunny} />
      ))}
    </ul>
  );
}
