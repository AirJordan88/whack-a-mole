import { useContext } from "react";
import GameContext from "../game/GameContext";

export default function Hole({ hasBunny }) {
  const { hop } = useContext(GameContext);
  console.log("hasBunny", hasBunny);
  return <li className={`hole ${hasBunny ? "bunny" : ""}`} onClick={hop}></li>;
}
