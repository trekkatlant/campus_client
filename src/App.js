import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllCampuses from './components/allCampuses';
import Campus from './components/singleCampus';
import AllStudents from './components/allStudents';
import Student from './components/singleStudent';

class App extends Component {
  render() {
    const AllCampusesComponent = () => <AllCampuses/>
    const AllStudentsComponent = () => <AllStudents/>
    const HomePageComponent = () => <Home/>
    const SinglePageComponent = () => <Campus/>
    const SingleStudentComponent = () => <Student/>

    return (
    <Router>
      <Switch>
        <Route exact path="/" render= {HomePageComponent} />
        <Route exact path="/campuses" render ={AllCampusesComponent}/>
        <Route exact path="/campus" render={SinglePageComponent}/>
        <Route exact path="/students" render={AllStudentsComponent}/>
        <Route exact path ="/student" render={SingleStudentComponent}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
