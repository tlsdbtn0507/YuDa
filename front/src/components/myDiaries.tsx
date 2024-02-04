import { useQuery } from "react-query"
import { getDiaries } from "../api/diary/diaryApi"
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Diary from "./diary/diary";

import css from '../css/diaryList.module.css'
import { diaryStore } from "../store/diary/diaryStore";
import NullDiary from "./diary/nullDiary";

const MyDiaries = () => {

  const navigate = useNavigate();

  const { data, isError, isFetching } = useQuery('diaries', getDiaries);

  const { getDiaries: fetchingDiary ,diaries} = diaryStore(state => state);

  useEffect(() => {
    if (isError) {
      alert('로그인 후 사용해 주세요!');
      navigate('/login');
      window.location.reload();
    }
    if (data) fetchingDiary(data)
    
  }, [isError,data]);

  let content

  if (diaries) content = diaries.map(e => <Diary key={e.id} diaryInfo={e} />);

  if (diaries.length === 0) content = <NullDiary msg="아직 작성한 일기가" />;

  if (isFetching) content = <p>데이터를 불러오는 중입니다...</p>;

  return(
  <>
    <h5 className={css.h5}>나의 일기들</h5>
    <div className={css.list}>
      {content}
    </div>
  </>
  )
}

export default MyDiaries