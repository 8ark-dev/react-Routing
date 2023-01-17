import React from "react";

import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";
import LoginForm from './LoginForm';

export default function UserLogin() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
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
      <h2>Home Page</h2>
      <div>
        {}
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
        {}
      </div>
    </div>
  );
}

function UserDetailPage() {
  const email = 'abc@def.com'
  const password = '1234'

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>
        <h3>User Details</h3>
        <em>{email}</em>
        <br/>
        <strong>{password}</strong>
      </p>
      {}
    </div>
  );
}