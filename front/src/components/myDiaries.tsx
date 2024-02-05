import { useEffect, useRef } from "react";
import Diary from "./diary/diary";

import css from '../css/diaryList.module.css'
import { diaryStore } from "../store/diary/diaryStore";
import NullDiary from "./diary/nullDiary";

const MyDiaries = () => {

  const { diaries } = diaryStore(state => state);

  const currentScroll = useRef<HTMLInputElement>(null)

  let content

  if (diaries) content = diaries.map(e => <Diary key={e.id} diaryInfo={e} />);

  if (diaries.length === 0) content = <NullDiary msg="아직 작성한 일기가" />;

  return(
  <div className={css.wrapper}>
    <h5 className={css.h5}>나의 일기들</h5>
    <div className={css.list} ref={currentScroll}>
      {content}
    </div>
  </div>
  )
}

export default MyDiaries