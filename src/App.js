import React, { Component } from 'react';
import { Switch, Link, Route } from "react-router-dom";


import Home from './components/home';
import Login from './components/login';
import Regist from './components/regist';
import Board from './components/board';

import './reset.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state = {
    users: [],

  }
  componentWillMount = () => {
    console.log("compoenntwillMount!!");
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
            {/* // render={() => <Regist onSubmit={this.handleUserCreate} />} />  */}
            <Route path="/Board" component={Board} />
            <Route path="/Login" component={Login} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;