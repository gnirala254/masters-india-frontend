import React, { useState } from 'react';

import Login from './components/Login';
import SignUp from './components/Signup';
import Main from './components/Main';

const App = () => {
  const [login, setLogin] = useState(false);
  const [status, setStatus] = useState('');

  const makeLogin = (value) => {
    // debugger;
    if (value === false) {
      setStatus('signup');
    }

    setLogin(value);
  };

  const loginStatus = (value) => {
    setStatus(value);
  };

  return (
    <div>
      <div>
        {status === 'signup' && !login ? (
          <SignUp loginStatus={loginStatus} />
        ) : !login ? (
          <Login makeLogin={makeLogin} loginStatus={loginStatus} />
        ) : (
          <Main makeLogin={makeLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
