import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import Home from './pages/home';
import Login from './pages/login';
import Regist from './pages/regist';
import Board from './pages/board';

import './reset.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  state = {
    users: []
  }

  // handleUserCreate = (_id, _pw, _email, _phone) => {
  //   console.log(_id);
  //   this.setState({
  //     users: this.state.users.concat(
  //       { id: _id, pw: _pw, email: _email, phone: _phone }
  //     )
  //   })
  // };
  componentDidMount = () => {


    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // userInfo.map(item => console.log(item));
  }
  render() {
    return (
      <>
        <header className="header_wrap">
          <Link to="/Login" onSubmit={this.handleUserCreate}>
            <div className="header_menu">login</div>
          </Link>
          <Link to="/Regist">
            <div className="header_menu">regist</div>
          </Link>
          <Link to="/Board">
            <div className="header_menu">board</div>
          </Link>
          <Link to="/">
            <div className="header_menu">Home</div>
          </Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/Regist" component={Regist} />
          {/* // render={() => <Regist onSubmit={this.handleUserCreate} />} />  */}
          <Route path="/Board" component={Board} />
          <Route path="/Login" component={Login} />
        </main>
      </>
    );
  }
}

export default App;