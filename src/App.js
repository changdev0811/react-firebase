import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './components/common/PrivateRoute';

import logo from './logo.svg';
import './App.css';

import NavBar from './components/layout/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SingUp';
import Dashboard_student from './components/dashboard/Dashboard_student';
import GeneralAdvice from './components/advice/GeneralAdvice';

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
              <Route exact path="/dashboard" component={Dashboard_student}></Route>
              <Route exact path="/service" component={SignUp}></Route>
              <Route exact path="/advice" component={GeneralAdvice}></Route>
              
              {/* <Switch>
                <PrivateRoute exact path="/" component={Dashboard_student}></PrivateRoute>
              </Switch> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
