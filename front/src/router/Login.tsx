import { Form } from 'react-router-dom'
import css from '../css/login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Login = () => { 
  
  return(
    <div className={css.div}>
      <Form className={css.form} method='post'>
        <h1>Log In</h1>
        <label htmlFor='id' id='id'className={css.font}>
          <FontAwesomeIcon icon={faUser}/> ID
        </label>
        <input required type="text" name="id" id="id" />
        <label htmlFor='pw' id='pw'className={css.font}>
          <FontAwesomeIcon icon={faLock}/> PW
        </label>
        <input required type="password" name="pw" id="pw" />
        <button type='submit' className={css.btn}>로그인</button>
        <p className={css.sign}>아이디가 없다면? <Link to={'/sign'}>회원가입</Link></p>
      </Form>
    </div>
  )
}

export default Login