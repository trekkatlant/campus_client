// import React, {Component} from 'react';
// import StudentCard from './StudentCard'
// import '../styles/singleCampus.css'
// import Navbar from './navbar'

// class Campus extends Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     let name = "Hunter College"
//     let address = "695 Park Ave"
//     let imageUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1"
//     let text = "Public university in NYC"
//     let students = [{name:"Jack",campus:"Hunter",imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1'},
//                     {name:"John",campus:"Baruch",imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1'},
//                     {name:"Adam",campus:"Hunter",imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1'}]
//     return ( <div>
//                 <Navbar/>
//                 <div className="campusData">
//                     <p> {name} </p>
//                     <p> {address} </p>
//                     <img src = {imageUrl}></img>
//                     <button> Edit </button>
//                     <button> Delete </button>
//                 </div>
//                 <h1> Students </h1>
//                 <div className="students">
//                   {students.length > 0 ?
//                     students.map((student,index) => {
//                       return <StudentCard name={student.name} campus={student.campus} imageUrl={student.imageUrl}/>
//                     })
//                     :
//                     <p>No Students</p>
//                   }
//                 </div>
//              </div>
//     )
//   }
// }

// export default Campus


import React, { Component } from 'react';
import axios from 'axios';
import StudentCard from "./StudentCard"
import { connect } from 'react-redux';
import {removeStudentThunk} from "../store/utilities/students";
import '../styles/singleCampus.css'

class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      campus: [],
      students: []
    }
  }
  async componentDidMount() {
    this.fetchSingleCampus();
  }

  async fetchSingleCampus() {
    try {
      let { data } = await axios.get(`https://campuss.herokuapp.com/api/campuses/${this.props.match.params.id}/students`)
      this.setState({
        campus: data,
        students: data.students
      })
      console.log(data.students)
    }
    catch(err) {
      console.log(err);
    }
  }

  removeStudent = async(id) => {
    await this.props.removeStudent(id);
    this.fetchSingleCampus();
}

  display = () =>(
    this.state.students.map(item=>{
      return (
        <StudentCard
        image={item.image}
        firstName={item.firstname}
        lastName={item.lastname}
        email = {item.email}
        gpa = {item.gpa}
        id = {item.id}
        removeStudent={this.removeStudent}
        />
      )
    })
  )

  render() {
    const { campus } = this.state;

    return (
      <div className="container">
        <h1>{campus.name}</h1>
        <div className="img">
          <img src={campus.image}></img>
        </div>
        <div className="description">
          <p>{campus.description}</p>
        </div>
        <div className="students">
          <h2>Students</h2>
          <p>{this.display()}</p>
        </div>
      </div>
    );
  }
}


const mapState = (state) => {
  return {
      students: state.allStudents
  }
}

const mapDispatch = (dispatch) => {
  return {
      removeStudent: (id) => dispatch(removeStudentThunk(id))
  }
}

export default connect(mapState, mapDispatch)(SingleCampus);