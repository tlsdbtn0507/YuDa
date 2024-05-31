import { create } from "zustand";
import { DiaryType } from "../../model/types";
import { fetchMoreDiaries } from "../../api/diary/diaryApi";

type DiaryStore = {
  diaries: DiaryType[],
  storeDiary: (arr: []) => void,
  getMoreDiaries:(id:number) => Promise<boolean>
}

export const diaryStore = create<DiaryStore>((set) => ({
  diaries: [],
  storeDiary: (arr: DiaryType[]) => set((state) => ({ ...state, diaries: arr })),
  getMoreDiaries: async (id: number) => {
    const res = await fetchMoreDiaries(id);

    if (res.length === 0) return false;

    set(state => ({ diaries: state.diaries.concat(res) }));
    
    return true
  }
}))