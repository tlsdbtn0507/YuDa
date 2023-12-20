import css from '../css/laTod.module.css'
import Diary from './diary'

const LastToday = () =>{

  return(
    <>
      <h5 className={css.title}>작년의 오늘</h5>
      <Diary/>
    </>
  )
}

export default LastToday