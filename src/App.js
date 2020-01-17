// import React, {Component} from 'react';
// import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
// import './App.css';
// import Home from './components/Home';
// import AllCampuses from './components/allCampuses';
// import Campus from './components/singleCampus';
// import AllStudents from './components/allStudents';
// import Student from './components/singleStudent';

// class App extends Component {
//   render() {
//     //console.log(props)
//     const AllCampusesComponent = () => <AllCampuses/>
//     const AllStudentsComponent = (props) => <AllStudents {...props}/>
//     const HomePageComponent = () => <Home/>
//     const SingleCampusComponent = (props) => <Campus {...props}/>
//     const SingleStudentComponent = (props) => <Student {...props}/>

//     return (
//     <Router>
//       <Switch>
//         <Route exact path="/" render= {HomePageComponent} />
//         <Route exact path="/campuses" render ={AllCampusesComponent}/>
//         <Route exact path="/students" render={AllStudentsComponent}/>
//         <Route exact path="campuses/:id" render={SingleCampusComponent}/>
//         <Route exact path="students/:id" render={SingleStudentComponent}/>
//       </Switch>
//     </Router>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AllCampus from './components/allCampuses'
import AllStudents from './components/allStudents'
import SingleCampus from './components/singleCampus';
import SingleStudent from "./components/singleStudent";

class App extends Component {
  render(){
    const allCampusComponent = () =>(<AllCampus/>);
    const allStudentsComponent = () =>(<AllStudents/>)
    const singleCampusComponent = (props) =>(<SingleCampus {...props}/>)
    const singleStudentComponent = (props) => (<SingleStudent {...props}/>)
    return (
      <Router>
          <Switch>
            <Route exact path="/" render={allCampusComponent}/>
            <Route exact path="/students" render={allStudentsComponent}/>
            <Route exact path="/campus/:id" render={singleCampusComponent}/>
            <Route exact path="/students/:id" render={singleStudentComponent}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
