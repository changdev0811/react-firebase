import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import logo from './logo.svg';
import './App.css';

import NavBar from './components/layout/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SingUp';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar></NavBar>
            <div className="container">
              <Route exact path='/' render={() => (<Redirect to="/login"/> )}/>
              <Route exact path="/login" component={SignIn}></Route>
              <Route exact path="/signup" component={SignUp}></Route>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
