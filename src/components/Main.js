import React from 'react';
import Header from './Header';
import Search from './Search';
import Favorite from './Favorite';
import { BrowserRouter, Route } from 'react-router-dom';

function Main(props) {
  return (
    <div>
      <BrowserRouter>
        <Header makeLogin={props.makeLogin} />

        <Route path="/" exact component={Search} />
        <Route path="/fav" exact component={Favorite} />
      </BrowserRouter>
    </div>
  );
}

export default Main;
