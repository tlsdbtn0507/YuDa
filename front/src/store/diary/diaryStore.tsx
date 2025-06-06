import { create } from "zustand";
import { DiaryCameFromServer, IsDiaryWritten } from "../../model/interfaces";
import { fetchMoreDiaries } from "../../api/diary/diaryApi";

import UI from "constants/uiConstants";

type DiaryStore = {
  diaries: DiaryCameFromServer[],
  isWritingDairy: boolean,
  isDiaryWritten: IsDiaryWritten,
  diaryFeelingReason: string,
  writeDiaryFeelingReason: (fr: string) => void,
  toggleWriteDairy: (tog: boolean) => void,
  getDiaries: (arr: []) => void,
  getMoreDiaries: (id: number) => Promise<boolean>,
  setWritingDiary: (writingDiary: IsDiaryWritten) => void,
}

export const diaryStore = create<DiaryStore>((set) => ({
  diaries: [],
  isWritingDairy: false,
  isDiaryWritten: JSON.parse(localStorage.getItem('writingDiary') as string),
  diaryFeelingReason: UI.EMPTY_STRING,
  writeDiaryFeelingReason: (fr: string) => set((state) => ({ diaryFeelingReason: fr })),
  toggleWriteDairy: (tog: boolean) => {
    window.scrollTo(0, 0)
    set(state => ({ isWritingDairy: tog }))
  },
  getDiaries: (arr: DiaryCameFromServer[]) => set((state) => ({ ...state, diaries: arr })),
  getMoreDiaries: async (id: number) => {
    const res = await fetchMoreDiaries(id);
    if (res.length === 0) return false;
    else {
      set(state => ({ diaries: state.diaries.concat(res) }))
      return true
    }
  },
  setWritingDiary: (writingDiary: IsDiaryWritten) => {
    localStorage.setItem('writingDiary', JSON.stringify(writingDiary));
    set(state => ({ isDiaryWritten: writingDiary }));
  },
}));