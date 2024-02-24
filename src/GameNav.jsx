import React from "react";
import { useSelector } from "react-redux";

function GameNav() {
  const heart = useSelector((state) => state.game.heart);
  const data = useSelector((state) => state.game.countries);
  console.log(heart);

  return (
    <div className="max-w-full gap-4 h-[216px] flex-wrap flex justify-center">
      {heart.map((n) => (
        <div
          className={`w-[90px] h-[100px] rounded-[40%] ${
            n.selected ? "" : "opacity-[30%]"
          }  flex justify-center items-center bg-blue-500`}
        >
          <span
            className={`text-6xl opacity-1 z-10 ${
              n.selected ? "" : "hidden"
            }  text-white font-bold `}
          >
            {n.let}
          </span>
        </div>
      ))}
    </div>
  );
}

export default GameNav;
