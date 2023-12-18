import { Form } from 'react-router-dom'
import css from '../css/login.module.css'

const Login = () =>{ 
  return(
    <Form>
      <div className={css.div}>
        <h1>login</h1>
        <label htmlFor='id' id='id'><p>Id</p></label>
        <input type="text" name="id" id="id" />
      </div>
    </Form>
  )
}

export default Login