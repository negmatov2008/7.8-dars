import { useDispatch, useSelector } from "react-redux";
import GameNav from "./GameNav";
import Keybord from "./Keybord";
import { addCountre } from "./redux/game";

function Game() {
 

  return (
    <div className="flex flex-col gap-[50px] pt-[30px]">
      <GameNav />
      <Keybord />
    </div>
  );
}

export default Game;
