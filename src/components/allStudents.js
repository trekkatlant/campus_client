import React, {Component} from 'react';
import StudentCard from './StudentCard';
import Navbar from './navbar';

class AllStudents extends Component{
  constructor(props){
    super(props)
    this.state = {
      addStudent: false
    }
  }
  componentDidMount() {
    this.props.fethStudent();
    this.props.fetchAllCampuses();
  }

  render(){
    return(
      <div>
        <Navbar />
        <h1> All Students </h1>
        <button> Add New Student </button>
        <div className="AllCampuses">
            {students.length > 0 ?
              students.map((student,index) => {
                return <StudentCard name={student.name} campus={student.campus} imageUrl={student.imageUrl}/>
              })
              :
              <p>No Students</p>
            }
         </div>
      </div>
    )
  }
}

export default AllStudents
