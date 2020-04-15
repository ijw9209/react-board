import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import home from './pages/home';
import login from './pages/login';
import regist from './pages/regist';
import board from './pages/board';

import './reset.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  render() {
    return (
      <>
        <header className="header_wrap">
          <Link to="/login">
            <div className="header_menu">login</div>
          </Link>
          <Link to="/regist">
            <div className="header_menu">regist</div>
          </Link>
          <Link to="/board">
            <div className="header_menu">board</div>
          </Link>
          <Link to="/">
            <div className="header_menu">Home</div>
          </Link>
        </header>
        <main>
          <Route exact path="/" component={home} />
          <Route path="/regist" component={regist} />
          <Route path="/board" component={board} />
          <Route path="/login" component={login} />
        </main>
      </>
    );
  }
}

export default App;