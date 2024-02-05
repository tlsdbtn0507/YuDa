import { faCirclePlus, faClipboard, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import css from '../../css/lowNav.module.css'
import NavBtn from "./navBtn"

const Nav = () => {
  
  return (
    <div className={css.lowNav}>
      <NavBtn icon={faClipboard} p="오늘의 일기"/>
      <NavBtn icon={faCirclePlus} p="일기 쓰기"/>
      <NavBtn icon={faUser} p="로그아웃"/>
    </div>
  )
}

export default Nav