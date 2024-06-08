import LastToday from '../components/lastToday'
import MyDiaries from '../components/myDiaries'
import Nav from '../components/nav/nav'
import DayMaker from '../components/util/dayMaker'
import css from '../css/main.module.css'

import { useQuery } from '@tanstack/react-query'
import { getDiaries } from '../api/diary/diaryApi'
import { diaryStore } from '../store/diary/diaryStore'
import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { checkRefreshTokenIsExpire } from 'utils/util'

const HomePage = () => {

  const refreshToken = localStorage.getItem('refreshToken') as string;

  const { data, isError } = useQuery({
    queryKey: ['diaries'],
    queryFn: getDiaries,
  });

  const { storeDiary } = diaryStore(state => state);

  useEffect(() => {
    if (data) storeDiary(data);

    const { iat } = jwtDecode(refreshToken); 

    let clearTimeId = checkRefreshTokenIsExpire(iat);

    return () => {
      clearTimeout(clearTimeId as ReturnType<typeof setTimeout>)
    }
  }, [isError, data]);
  
  return (
    <>
      <div className={css.total}>
        <div className={css.wrapper}>
          <DayMaker/> 
          <LastToday/>
          <MyDiaries/>
        </div>
        <Nav/>
      </div>
    </>
  )
}

export default HomePage