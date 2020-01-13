import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllCampuses from './components/allCampuses';

class App extends Component {
  render() {
    const AllCampusesComponent = () => <AllCampuses/>
    const HomePageComponent = () => <Home/>
    return (
    <Router>
      <Switch>
        <Route exact path="/" render= {HomePageComponent} />
        <Route exact path="/campuses" render ={AllCampusesComponent}/>
      </Switch>
    </Router>
    )
  }
}

export default App;
