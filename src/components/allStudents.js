import React, {Component} from 'react';
import StudentCard from './StudentCard';
import Navbar from './navbar';

class AllStudents extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let students = [{name:"Jack",campus:"Hunter",imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1'},
                    {name:"John",campus:"Baruch",imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1'},
                    {name:"Adam",campus:"Hunter",imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1'}]
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
