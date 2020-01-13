import React, {Component} from 'react';

class Student extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
          <div className="student">
            <p>Name: {this.props.name}</p>
            <p>Email: {this.props.email}</p>
            <p>GPA: {this.props.gpa}</p>
            <p>Campus: {this.props.campus}</p>
            <img src={imageUrl}></img>
          </div>
    )
  }
}

export default Student
