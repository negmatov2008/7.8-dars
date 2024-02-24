import { useSelector } from "react-redux";

function Header() {
  const yurak = useSelector((state) => state.game.yurak);
  console.log(yurak);
  const img = useSelector((state) => state.game.img);
  return (
    <>
      <div className="flex justify-between items-center">
        <img className="z-10" src="menyuu.png" alt="" />
        <ul className="flex gap-6 max-w-[700px] h-[124px] flex-wrap">
          {yurak.map((n, i) => (
            <li>
              <img key={i} width={54} height={49} src="img.png" alt="" />
            </li>
          ))}
        </ul>
      </div>
      <dialog id="modal" className="modal  ">
        <div
          id="modalCont"
          className="modal-box realtive bg-transparent border-none"
        >
          <img src={img} className="absolute z-10 top-0 left-[20%] " alt="" />
          <div className="flex flex-col mt-[120px] gap-[34px] max-w-[275px] mx-auto">
            <a href="/">
              <button id="btnn" className="text-[24px] font-semibold ">
                PLAY AGAIN!
              </button>
            </a>
            <button
              onClick={window.close()}
              id="btnnn"
              className="text-[24px] font-semibold "
            >
              QUTI GAME
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Header;
