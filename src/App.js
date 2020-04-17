import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';


import Home from './pages/home';
import Login from './pages/login';
import Regist from './pages/regist';
import Board from './pages/board';

import './reset.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state = {
    users: [],
    isLogin: false
  }


  handleUserCreate = (e) => {
    console.log(e);

  };
  componentDidMount = () => {

    console.log("컴포넌트 didmount");
    // const loginInfo = JSON.parse(sessionStorage.getItem("loginInfo"));
    // if (loginInfo) {
    //   console.log('여기');
    //   const loginExist = Object.keys(loginInfo).length;
    //   if (loginExist > 0) {
    //     this.setState({
    //       isLogin: true
    //     })
    //   } else {
    //     this.setState({
    //       isLogin: false
    //     })
    //   }
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // userInfo.map(item => console.log(item));
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
          <Link to="/Login" onSubmit={this.handleUserCreate} >
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