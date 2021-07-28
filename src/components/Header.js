import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const signOut = () => {
    localStorage.removeItem('user-info');
    props.makeLogin(false);
    // debugger;
  };

  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Search
      </Link>
      <Link to="/fav" className="item">
        Favorite
      </Link>
      <div className="item" onClick={() => signOut()}>
        SignOut
      </div>
    </div>
  );
};

export default Header;
