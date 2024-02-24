import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTOLettter } from "./redux/game";

const lets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function Keybord() {
  const dispatch = useDispatch();
  const leters = useSelector((state) => state.game.letters);
  const handleClick = (value) => {
    dispatch(addTOLettter(value.target.textContent));

    console.log((value.target.disabled = true));
  };

  return (
    <div className="max-w-full flex justify-center items-center gap-6 flex-wrap">
      {lets.map((l) => (
        <button
          onClick={(e) => {
            handleClick(e);
          }}
          className="flex disabled:opacity-[0.25]  justify-between items-center px-8 font-semibold bg-white rounded-[24px] text-[40px] text-[#261676] "
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default Keybord;
