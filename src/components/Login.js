import React, { useState } from 'react';
import Main from './Main';

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function login() {
    let item = { email: email, password: password };
    // debugger;
    fetch('https://pure-plateau-27734.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) => {
        // debugger;
        return res.json();
      })
      .then((json) => {
        // debugger;
        if (json.message === 'Auth successfull') {
          localStorage.setItem('user-info', json.token);
          props.makeLogin(true);
        } else {
          alert('User Not found');
        }
      });
  }

  return (
    <div>
      {localStorage.getItem('user-info') !== null ? (
        <Main makeLogin={props.makeLogin} />
      ) : (
        <div>
          <h1>Login</h1>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <button
              className="ui button"
              style={{ margin: '5px' }}
              onClick={login}
            >
              Login
            </button>
          </div>
          <div
            className="ui button"
            style={{ margin: '5px' }}
            onClick={() => props.loginStatus('signup')}
          >
            Sign Up
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
