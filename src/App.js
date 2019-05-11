import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import NavBar from './components/layout/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SingUp';
import Dashboard_student from './components/dashboard/Dashboard_student';
import General from './components/questionnaires/General';
import Mental from './components/questionnaires/Mental';
import GeneralAdvice from './components/advice/GeneralAdvice';
import Service_student from './components/service/Service_student';
import Service_staff from './components/service/Service_staff';

import Questionnariesresult from './components/questionnaires/Questionnariesresult';

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
              <Route exact path="/advice" component={GeneralAdvice}></Route>
              <Route exact path="/general" component={General}></Route>
              <Route exact path="/mental" component={Mental}></Route>
              <Route exact path="/questionnariesresult" component={Questionnariesresult}></Route>
              <Route exact path="/service" component={Service_student}></Route>
              <Route exact path="/manage_service" component={Service_staff}></Route>

            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
