import { Form } from 'react-router-dom'
import PwDiv from '../components/sign/pwDiv';
import userStore from '../store/user/userStore';
import IdCheckBtn from '../components/sign/idCheckBtn';

import css from '../css/sign.module.css'
import { useQuery } from 'react-query';
import { useRef, useState } from 'react';
import { checkIdDuple } from '../api/query/query';

const Sign = () => {

  const [isClicked, setIsClicked] = useState('');
  const [idChecked, setIdChecked] = useState(false);

  const idToCheckDuple = useRef<HTMLInputElement>(null);

  const { pwCheck } = userStore(state => state);

  const { data } = useQuery({
    queryKey: ['idcheck', { isClicked }],
    queryFn: () => checkIdDuple(isClicked),
    enabled: isClicked !== '',
    onSuccess: (data) =>  data ? setIdChecked(true) : setIdChecked(false),
    staleTime: 10000,
  })

  const doOtherThing = (e: React.FormEvent) => {
    e.preventDefault();
    const { value } = idToCheckDuple.current as HTMLInputElement;
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    
    if (value === '' || korean.test(value)) {
      idToCheckDuple.current?.focus()
      return alert('ID를 확인해주세요')
    }
    setIsClicked(value);
  };

  const permitSub = (e: React.FormEvent) => {
    if (!idChecked) {
      alert('아이디 중복검사를 체크해주세요!')
      idToCheckDuple.current?.focus();
      e.preventDefault();
    }
    if (!pwCheck) {
      alert('비밀번호 중복 검사를 해주세요')
      document.getElementById('pwCheck')?.focus()
      e.preventDefault();
    }
    if(idChecked && pwCheck) return
  }

  return(
    <div className={css.total}>
      <Form className={css.div} method='post'>
        <h1>회원가입</h1> 
          <label htmlFor="userName">이름</label>
            <input required type="userName" id='name' name='name'/>
          <label htmlFor="userId">아이디
          <IdCheckBtn onClick={doOtherThing} isIdVal={idChecked} />
          </label>
        <input
          required type="userId" id='userId' name='userId' ref={idToCheckDuple}
          placeholder='한글 사용 불가'/>
        <label htmlFor="pw">비밀번호</label>
          <PwDiv type='pw' />
        <label htmlFor="pwCheck">비밀번호 확인</label>
          <PwDiv type='pwCheck' />
        <button type='submit' onClick={permitSub} className={css.sendBtn}>회원가입 완료</button>
       </Form>
    </div>
  )
}

export default Sign