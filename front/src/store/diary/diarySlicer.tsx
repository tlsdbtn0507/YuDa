import { createSlice } from "@reduxjs/toolkit";
import { DiarySummary } from "../../model/types";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "..";


interface initialStateObj {
  lastToday: DiarySummary,
  diaries: DiarySummary[],
}

const initialState: initialStateObj | {diaries:{}} = {diaries:{}}

const diarySlicer = createSlice({
  name:'diary',
  initialState,
  reducers:{
    getDiaries : (state,action:PayloadAction<initialStateObj>) =>{
      state.diaries = action.payload
    }
  }
})

export const diaryValue = (state:RootState) => state.diary

export const diaryAction = diarySlicer.actions

export default diarySlicer.reducer