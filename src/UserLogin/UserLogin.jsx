import React, { useState } from "react";

import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  useLocation,
  Redirect,
  useHistory,
} from "react-router-dom";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const users=[]

export default function UserLogin() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route path="/detail">
          <UserDetailPage/>
        </Route>

        <Route path="/login">
          <LoginPage/>
        </Route>

        <Route path="/register">
          <RegisterPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

function HomePage() {
  return (
    <div>
      <h2>Welcome to my homepage</h2>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

function LoginPage() {
  const history = useHistory()
  const handleSubmit = (formData) => {
    const {email, password} = formData
    const foundUser = users.find(user => user.email === email && user.password === password)
    
    if (!foundUser) return 
    history.push(`/detail?email=${email}&password=${password}`)
  
  }
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onSubmit = {handleSubmit}/>
      <div>
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function UserDetailPage() {

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const email = searchParams.get('email')
  const password = searchParams.get('password')

  if (!email || !password) {
    return <Redirect to="/login"/>
  }

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>
        <h3>User Details</h3>
        <em>{email}</em>
        <br/>
        <strong>{password}</strong>
      </p>
      <Link to="/login">Logout</Link>
    </div>
  );
}

function RegisterPage() {
  const [error, setError] = useState()
  const history = useHistory();

  const handleSubmit = (formData) => {
    const { email } = formData
    const formUser = users.find(user => user.email === email)

    if (formUser) {
      return setError("이미 등록된 이메일입니다.")
    }

    users.push(formData)
    history.push('/login')
  };

  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm onSubmit ={handleSubmit}/>
      <div>
        <ul>
          <li>
            <Link to="/">Back to home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div>
        {error}
      </div>
    </div>
  )
}