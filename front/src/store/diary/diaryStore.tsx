import { create } from "zustand";
import { DiaryType } from "../../model/types";

type DiaryStore = {
  diaries: DiaryType[],
  getDiaries : (arr:[]) =>void
}

export const diaryStore = create<DiaryStore>((set) => ({
  diaries: [],
  getDiaries: (arr: DiaryType[]) => set((state) => ({ ...state, diaries: arr })),
}))