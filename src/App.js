import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllCampuses from './components/allCampuses';
import Campus from './components/singleCampus'

class App extends Component {
  render() {
    const AllCampusesComponent = () => <AllCampuses/>
    const HomePageComponent = () => <Home/>
    const SinglePageComponent = () => <Campus/>
    return (
    <Router>
      <Switch>
        <Route exact path="/" render= {HomePageComponent} />
        <Route exact path="/campuses" render ={AllCampusesComponent}/>
        <Route exact path="/campus" render={SinglePageComponent}/>
      </Switch>
    </Router>
    )
  }
}

export default App;
