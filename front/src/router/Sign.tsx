import { Form } from 'react-router-dom'

import css from '../css/sign.module.css'

const Sign = () => {

  

  return(
    <div className={css.total}>
      <Form className={css.div}>
          <h1>회원가입</h1> 
          <label htmlFor="userName">이름</label>
            <input type="userName" id='name' name='name'/>
          <label htmlFor="userId">아이디
            <button className={css.checkBtn}>
              아이디 중복 조회
            </button></label>
            <input type="userId" id='userId' name='userId'/>
          <label htmlFor="pw">비밀번호</label>
            <input type="password" id='pw' name='pw'
              placeholder='영문, 숫자, 특수기호 포함 6글자'/>
          <label htmlFor="pwCheck">비밀번호 확인</label>
            <input type="password" id='pwCheck' name='pwCheck'
              placeholder='비밀번호 확인'/>
          <button className={css.sendBtn}>회원가입 완료</button>
       </Form>
    </div>
  )
}

export default Sign