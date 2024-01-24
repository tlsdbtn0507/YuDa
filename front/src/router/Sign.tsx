import { Form } from 'react-router-dom'

import css from '../css/sign.module.css'
import { useQuery } from 'react-query';
import { useRef, useState } from 'react';
import { checkIdDuple } from '../api/query/query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faX } from '@fortawesome/free-solid-svg-icons';

const Sign = () => {

  const [isClicked, setIsClicked] = useState('');
  const [idChecked, setIdChecked] = useState(false);
  const [pwValid, setPwValid] = useState(true);
  //비밀번호 확인
  const [pwAcc, setPwAcc] = useState('');
  //비밀번호 확인 검증
  const [pwAccVal, setPwAccVal] = useState(true);

  const idToCheckDuple = useRef<HTMLInputElement>(null);
  const originPw = useRef<HTMLInputElement>(null);

  const { data } = useQuery({
    queryKey: ['idcheck', { isClicked }],
    queryFn: () => checkIdDuple(isClicked),
    enabled: isClicked !== '',
    onSuccess: (data) => { if (data) setIdChecked(true); },
    staleTime: 10000,
  })

  const doOtherThing = (e: React.FormEvent) => {
    e.preventDefault();
    const { value } = idToCheckDuple.current as HTMLInputElement;
    
    if (value === '') {
      idToCheckDuple.current?.focus()
      return alert('ID를 입력해주세요')
    }
    setIsClicked(value);
  };

  const checkPwValid = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_])/
    if (value.length < 6 || !pwRegex.test(value)) setPwValid(false);
    else setPwValid(true)
  }

  const checkPwAcc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwAcc(e.target.value)

    const pwCheck = `${originPw.current?.value}`

    if (pwAcc === pwCheck) setPwAccVal(true);
    else setPwAccVal(false)
  }

  const permitSub = (e: React.FormEvent) => {
    if (!idChecked) {
      alert('아이디 중복검사를 체크해주세요!')
      idToCheckDuple.current?.focus();
      e.preventDefault();
    }
    if (!pwAccVal) {
      alert('비밀번호 중복 검사를 해주세요')
      document.getElementById('pwCheck')?.focus()
      e.preventDefault();
    }
    if(idChecked && pwAccVal) return
  }

  return(
    <div className={css.total}>
      <Form className={css.div} method='post'>
          <h1>회원가입</h1> 
          <label htmlFor="userName">이름</label>
            <input required type="userName" id='name' name='name'/>
          <label htmlFor="userId">아이디
            <button onClick={doOtherThing} className={css.checkBtn}>
              아이디 중복 조회
            </button>
          </label>
            <input required type="userId" id='userId' name='userId' ref={idToCheckDuple}/>
        <label htmlFor="pw">비밀번호</label>
          <div className={css.divpw}>
          <input required type="password" id='pw' name='pw'
            ref={originPw}
            className={pwValid === true  && pwValid !== null? css.pwInput : css.pwInputVal}
            placeholder='영문, 숫자, 특수기호 포함 6글자' onChange={checkPwValid} />
          <FontAwesomeIcon icon={faCircleXmark} style={{color: "red", opacity:pwValid ? 0 :1 }} />
          </div>
        <label htmlFor="pwCheck">비밀번호 확인</label>
        <div className={css.divpw}>
          <input type="password" id='pwCheck' name='pwCheck'
            className={pwAccVal === true && pwAccVal !== null ? css.pwInput : css.pwInputVal}
            onBlur={checkPwAcc}
            onChange={checkPwAcc} placeholder='비밀번호 확인'/>
            <FontAwesomeIcon icon={faCircleXmark} style={{color: "red", opacity:pwAccVal ? 0 :1 }} />
        </div>
        <button type='submit' onClick={permitSub} className={css.sendBtn}>회원가입 완료</button>
       </Form>
    </div>
  )
}

export default Sign