import { configureStore } from "@reduxjs/toolkit";
import diarySlicer from "./diary/diarySlicer";

const store = configureStore({
  reducer:{
    diary:diarySlicer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store