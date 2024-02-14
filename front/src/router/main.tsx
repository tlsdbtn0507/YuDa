import LastToday from '../components/lastToday'
import MyDiaries from '../components/myDiaries'
import Nav from '../components/nav/nav'
import DayMaker from '../components/util/dayMaker'
import css from '../css/main.module.css'

import { useQuery } from '@tanstack/react-query'
import { getDiaries } from '../api/diary/diaryApi'
import { diaryStore } from '../store/diary/diaryStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { tokenTimer } from '../utils/util'

const Main = () => {

  const navigate = useNavigate()

  const { data, isError } = useQuery({
    queryKey: ['diaries'],
    queryFn: getDiaries,
    gcTime:Infinity
  });

  const { getDiaries: fetchingDiary } = diaryStore(state => state);
  
  useEffect(() => {
    if (isError) {
      alert('로그인 후 사용해 주세요!');
      navigate('/login');
      window.location.reload();
    }

    if (data) fetchingDiary(data);

    setInterval(() => tokenTimer(), 1000);
    
  }, [isError, data]);


  return (
    <>
      <div className={css.total}>
        <div className={css.wrapper}>
          <DayMaker/> 
          <LastToday/>
          <MyDiaries/>
        </div>
      </div>
      <Nav/>
    </>
  )
}

export default Main