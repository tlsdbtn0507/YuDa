import css from '../css/diary.module.css'

const Diary = () => {

  const diary = {
    date:{
      date:'16',
      day:'Tue',
      month:'12'
    },
    content:{
      title:'얄리얄리',
      body:'얄랴셩얄라리얄라'
    },
    img:{
      url:'/logo192.png'
    }
  }

  return(
    <div className={css.diary}>
      <div className={css.date}>
        <p>{diary.date.day}</p>
        <p>{diary.date.month}<span>월</span> </p>
        <p>{diary.date.date}<span>일</span></p>
      </div>
      <div className={css.content}>
        <p>{diary.content.title}</p>
        {/* <p>{diary.content.body}</p> */}
      </div>
      <div className={css.img}>
        <img src={diary.img.url} />
      </div>
    </div>
  )
}

export default Diary