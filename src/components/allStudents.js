// import React, {Component} from 'react';
// import StudentCard from './StudentCard';
// import Navbar from './navbar';

// class AllStudents extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       addStudent: false
//     }
//   }
//   componentDidMount() {
//     this.props.fethStudent();
//     this.props.fetchAllCampuses();
//   };
  
//   show = () => (
//     this.props.students.map(student=> {
//       return(
//         <StudentCard 
//           firstName={this.firstName}
//           lastName={this.lastName}
//           campus={this.campus}
//           removeCampus={this.props.removeCampus} 
//           handleChange={this.handleChange} 
//           handleSubmit={this.handleEdit} />
//       )
//     })
//   )

//   handleChange = name

//   render(){
//     return(
//       <div>
//         <Navbar />
//         <h1> All Students </h1>
//         <button> Add New Student </button>
//         <div className="AllCampuses">
//             {students.length > 0 ?
//               students.map((student,index) => {
//                 return <StudentCard 
//                         firstName={student.firstName} 
//                         campus={student.campus} 
//                         imageUrl={student.imageUrl}/>
//               })
//               :
//               <p>No Students</p>
//             }
//          </div>
//       </div>
//     )
//   }
// }

// export default AllStudents


import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import StudentCard from "../components/StudentCard";
import NewStudentPopUp from './NewStudentPopUp'
import { fetchAllStudentsThunk, removeStudentThunk, addStudentThunk, editStudentThunk } from "../store/utilities/students";
import {fetchAllCampusThunk} from '../store/utilities/campuses';
import '../styles/allStudents.css'


class allStudents extends Component {
    constructor() {
        super();
        this.state = {
            addStudent: false
        }
      }

    componentDidMount() {
        this.props.fetchAllStudents();
        this.props.fetchAllCampus();
    }

    removeStudent = (id) => {
        this.props.removeStudent(id);
    }

    addStudent = (student) => {
        this.props.addStudent(student);
    }

    display = () =>(
        this.props.students.map(item=>{
          return (
            <StudentCard
            image={item.image}
            firstName={item.firstname}
            lastName={item.lastname}
            id={item.id}
            campusId = {item.campusid}
            removeStudent={this.props.removeStudent}
            campuses={this.props.campuses}
            editStudent={this.props.editStudent}
            />
          )
        })
      )

      handleChange = name => ({ target }) =>{
        this.setState({ 
          [name]: target.value
        }); 
      }
      
      handleNew = (id) =>{
        const arr= {
          "firstname":this.state.firstName,
          "lastname":this.state.lastName,
          "gpa": parseInt(this.state.gpa),
          "email":this.state.email,
          "image": "http://i.imgur.com/AItCxSs.jpg",
          "campusId": id
        }
        console.log(arr);
        this.props.addStudent(arr);
        this.toggleEdit();
      }  

      toggleEdit=()=>{
        this.setState({
          addStudent: !this.state.addStudent
        })
      }

    render() {
        return (
            <div className = "main">
                <div className = "title"><h1>Students</h1></div>
                <Link to="/"><button>Campuses</button></Link>
                <button onClick={this.toggleEdit}> Add Student </button>
                {this.state.addStudent? 
                (<NewStudentPopUp 
                    close={this.toggleEdit}
                    submit={this.handleNew}
                    handleChange={this.handleChange}
                    campuses={this.props.campuses}
                />)
                :(<div></div>)}
                <div className = "card">
                    {this.display()}
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        students: state.allStudents,
        campuses: state.allCampus
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        removeStudent: (id) => dispatch(removeStudentThunk(id)),
        addStudent: (student) => dispatch(addStudentThunk(student)),
        fetchAllCampus: () => dispatch(fetchAllCampusThunk()),
        editStudent: (id,arr) => dispatch(editStudentThunk(id,arr))
    }
}

export default connect(mapState, mapDispatch)(allStudents);
