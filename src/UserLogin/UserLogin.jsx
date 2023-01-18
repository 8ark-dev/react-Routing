import React from "react";

import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  useLocation,
  Redirect,
} from "react-router-dom";
import LoginForm from './LoginForm';

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
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm/>
      <div>
        <Link to="/">Back to Home</Link>
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