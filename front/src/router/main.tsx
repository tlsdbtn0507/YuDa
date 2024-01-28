import { useEffect } from 'react'
import LastToday from '../components/lastToday'
import MyDiaries from '../components/myDiaries'
import css from '../css/main.module.css'
import userStore from '../store/user/userStore'
import { useNavigate } from 'react-router'

const Main = () => {

  const daymaker = () =>{
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const day = new Date().getDay();

    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    return `${year} . ${month+1} . ${date} . ${days[day]}`
  }

  const { accessToken } = userStore(state => state);

  const navigate = useNavigate()

  useEffect(() => {
    
    if (accessToken === '') {
      alert('로그인 후 사용해주세요')
      navigate('/login');
    }

  },[accessToken])

  return(
    <div className={css.total}>
      <div className={css.wrapper}>
        <p className={css.today}>{daymaker()}</p>
        <LastToday/>
        <MyDiaries/>
      </div>
    </div>
  )
}

export default Main