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
    //console.log(props)
    const AllCampusesComponent = () => <AllCampuses/>
    const AllStudentsComponent = (props) => <AllStudents {...props}/>
    const HomePageComponent = () => <Home/>
    const SingleCampusComponent = (props) => <Campus {...props}/>
    const SingleStudentComponent = (props) => <Student {...props}/>

    return (
    <Router>
      <Switch>
        <Route exact path="/" render= {HomePageComponent} />
        <Route exact path="/campuses" render ={AllCampusesComponent}/>
        <Route exact path="/students" render={AllStudentsComponent}/>
        <Route exact path="campuses/:id" render={SingleCampusComponent}/>
        <Route exact path="students/:id" render={SingleStudentComponent}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
