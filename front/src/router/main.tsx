import LastToday from '../components/lastToday'
import MyDiaries from '../components/myDiaries'
import css from '../css/main.module.css'

const Main = () => {

  const daymaker = () =>{
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const day = new Date().getDay();

    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    return `${year} . ${month+1} . ${date} . ${days[day]}`
  }

  


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