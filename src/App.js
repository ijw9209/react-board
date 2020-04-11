import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import login from './pages/login';
import regist from './pages/regist';
import board from './pages/board';
class App extends Component {

  render() {
    return (
      <>
        <header>
          <Link to="/">
            <button>login</button>
          </Link>
          <Link to="/regist">
            <button>regist</button>
          </Link>
          <Link to="/board">
            <button>board</button>
          </Link>
        </header>
        <hr />
        <main>
          <Route exact path="/" component={login} />
          <Route path="/regist" component={regist} />
          <Route path="/board" component={board} />
        </main>
      </>
    );
  }
}

export default App;