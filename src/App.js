import React, { Component } from 'react';
import { Switch, Link, Route } from "react-router-dom";


import Home from './components/home';
import Login from './components/login';
import Regist from './components/regist';
import Board from './components/board';
import write from './components/write';

import './reset.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state = {
    users: [],

  }
  componentDidMount = () => {
    console.log("Appcomponentdidmount!")
  }

  componentWillUnmount = () => {
    sessionStorage.clear();
  }

  render() {
    return (
      <>
        <header className="header_wrap">
          <Link to="/Login" >
            <div className="header_menu">login</div>
          </Link>
          <Link to="/write">
            <div className="header_menu">write</div>
          </Link>
          <Link to="/Board">
            <div className="header_menu">board</div>
          </Link>
          <Link to="/">
            <div className="header_menu">Home</div>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Regist" component={Regist} />
            <Route path="/Board" component={Board} />
            <Route path="/Login" component={Login} />
            <Route path="/write" component={write} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;