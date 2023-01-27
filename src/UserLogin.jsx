import React, { useEffect } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRoute";

import { registerUser, loginUser } from "./service/auth";

export default function UserLogin() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <PrivateRoute path="/detail">
          <UserDetailPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function LoginPage() {
  const history = useHistory();

  const handleSubmit = (formData) => {
    const foundUser = loginUser(formData);

    if (!foundUser) return;

    const location = {
      pathname: "/detail",
      state: {
        user: foundUser,
      },
    };

    history.push(location);
  };

  // 페이지 별로 반복되어 등장하는 코드를 공통화하세요.
  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit} />
      <div>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function RegisterPage() {
  const history = useHistory();

  const handleSubmit = (formData) => {
    registerUser(formData);
    history.push("/login");
  };

  // 페이지 별로 반복되어 등장하는 코드를 공통화하세요.
  return (
    <div>
      <h2>Register</h2>
      <RegisterForm onSubmit={handleSubmit} />
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function UserDetailPage() {
  const history = useHistory();
  const location = useLocation();
  const user = location.state.user;

  useEffect(() => {
    return () => history.replace();
  }, [history]);

  // 페이지 별로 반복되어 등장하는 코드를 공통화하세요.
  return (
    <div>
      <h2>User Details</h2>

      <div>
        <em>email : {user.email}</em>
      </div>

      <div>
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
}
