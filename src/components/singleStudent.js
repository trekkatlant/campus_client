import React, {Component} from 'react';
import Navbar from './navbar';
class Student extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
          <div className="student">
          <Navbar/>
            <p>Name: {this.props.name}</p>
            <p>Email: {this.props.email}</p>
            <p>GPA: {this.props.gpa}</p>
            <p>Campus: {this.props.campus}</p>
            <img src="#"></img>
          </div>
    )
  }
}

export default Student
