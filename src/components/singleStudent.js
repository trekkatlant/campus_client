// import React, {Component} from 'react';
// import Navbar from './navbar';
// class Student extends Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//           <div className="student">
//           <Navbar/>
//             <p>Name: {this.props.name}</p>
//             <p>Email: {this.props.email}</p>
//             <p>GPA: {this.props.gpa}</p>
//             <p>Campus: {this.props.campus}</p>
//             <img src="#"></img>
//           </div>
//     )
//   }
// }

// export default Student


import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CampusCard from './CampusCard'
import '../styles/singleStudent.css'

class Student extends Component {
    constructor() {
        super();
        this.state = {
            student:[],
            campus: []
        }
    }

    async componentDidMount () {
        try{
          let {data} = await axios.get(`https://campuss.herokuapp.com/api/students/${this.props.match.params.id}/campus`)
          this.setState({
            student:data,
            campus:data.campus
          })
          console.log(data)
        }
        catch(err){
          console.log(err);
        }
      }

    render() {
      const {student} = this.state;
      return (
          <div className="container">
              <h1>{student.firstname + " " + student.lastname}</h1>
              <div className="img">
                <img src={student.image}></img>
              </div>
              <div className="description">
                <p>Student email: {student.email}</p>
                <p>GPA: {student.gpa}</p>
                
              </div>
              
              <div className="campus">
              <h2>Campus Information</h2>
              <img src={this.state.campus.image}></img>
              <p>Student belongs to: <Link to={`/campus/${this.state.campus.id}`}>{this.state.campus.name}</Link></p>
                <p>Address: {this.state.campus.address}</p>
                <p>Description: {this.state.campus.description}</p>
              </div>
          </div>
      );
    }
}

export default Student;



