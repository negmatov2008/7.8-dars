import React, { useState } from "react";
import Header from "./Header";
import Game from "./Game";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-[100%]  bg- relative  h-full  bg-[#151278]  ">
        <div className="max-w-[80%] pt-10 mx-auto">
          <Header />
          <Game />
        </div>
      </div>
    </Provider>
  );
}

export default App;
