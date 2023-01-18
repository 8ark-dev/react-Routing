import React, {useRef} from 'react'
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    history.push(`/detail?email=${email}&password=${password}`)
    //history.push({
     // pathname : '/detail',
     // search : `?email=${email}&password=${password}`
    //})
  };

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            placeholder='enter email.'
            required
            ref={emailRef}
            id="email"
            type="email"
            name='email'
            autoComplete='off'
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input
            placeholder='enter password.'
            ref={passwordRef}
            required
            id='password'
            name='password'
            type='password'
          />
        </fieldset>
        <button type='submit' onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm;