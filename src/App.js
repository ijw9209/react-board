import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import login from './login';
import regist from './regist';
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
        </header>
        <hr />
        <main>
          <Route exact path="/" component={login} />
          <Route path="/regist" component={regist} />
        </main>
      </>
    );
  }
}

export default App;