import { configureStore } from "@reduxjs/toolkit";

import game from "./game";

const store = configureStore({
  reducer: {
    game: game,
  },
});

export default store;
