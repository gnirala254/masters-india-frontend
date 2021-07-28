import React, { useState } from 'react';

const SignUp = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function signup() {
    let item = { email: email, password: password };
    // debugger;
    fetch('https://pure-plateau-27734.herokuapp.com/user/signup', {
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
        if (json.message === 'User created') {
          alert(json.message);
          window.location = '/';
        } else {
          alert('Try Again');
        }
      });
  }

  return (
    <div>
      <h1>Sign Up</h1>
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
          onClick={signup}
        >
          SignUp
        </button>
      </div>
      <div
        className="ui button"
        style={{ margin: '5px' }}
        onClick={() => props.loginStatus('login')}
      >
        Log In
      </div>
    </div>
  );
};

export default SignUp;
