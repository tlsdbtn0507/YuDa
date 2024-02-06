import { useEffect, useRef, useState } from "react";
import Diary from "./diary/diary";

import css from '../css/diaryList.module.css'
import { diaryStore } from "../store/diary/diaryStore";
import NullDiary from "./diary/nullDiary";
import LoadingSpin from "./util/loadingSpin";

const MyDiaries = () => {
  const [moreDiv, setMoreDiv] = useState(false);

  const { diaries } = diaryStore(state => state);

  const currentScroll = useRef<HTMLInputElement>(null)

  let content

  if (diaries) content = diaries.map(e => <Diary key={e.id} diaryInfo={e} />);

  if (diaries.length === 0) content = <NullDiary msg="아직 작성한 일기가" />;


  const addMoreDiaries = () => {
    const scrollContainer = currentScroll.current;

    if (scrollContainer) {
      const { scrollHeight, clientHeight, scrollTop } = scrollContainer;
      console.log(scrollHeight, clientHeight, scrollTop)
      if (scrollHeight <= clientHeight + scrollTop) {
        setMoreDiv(true)
        console.log('getMore')
      } else setMoreDiv(false)
    }
  }

  return (
  <>
    <h5 className={css.h5}>나의 일기들</h5>
    <div className={css.wrapper}ref={currentScroll} onScroll={addMoreDiaries}>
      <div className={css.list} >
          {content}
          <div className={css.more}>
            <LoadingSpin/>
          </div>
      </div>
    </div>
  </>
  )
}

export default MyDiaries