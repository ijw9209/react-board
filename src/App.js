import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Head from './components/head';
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
    loginUser: [],
    loginState: false
  }

  handleLogin = user => {
    if (user.length === 1) {
      this.setState({
        loginState: !this.state.loginState,
        loginUser: user
      });
    } else {
      this.setState({
        loginState: false
      });
    }
  }

  handleLogout = () => {
    if (this.state.loginState) {
      this.setState({
        loginState: !this.state.loginState,
        loginUser: []
      })
      sessionStorage.clear();
    }
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
        <Router>
          <Head loginState={this.state.loginState} onLogout={this.handleLogout}></Head>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Regist" component={Regist} />
              <Route path="/Board" component={Board} />
              <Route path="/Login" component={(props) =>
                <Login {...props}
                  onLogin={this.handleLogin}
                ></Login>
              } />
              <Route path="/write" component={write} />
            </Switch>
          </main>
        </Router>
      </>
    );
  }
}

export default App;