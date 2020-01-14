import React, {Component} from 'react';
import StudentCard from './StudentCard'
import '../styles/singleCampus.css'
import Navbar from './navbar'

class Campus extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let name = "Hunter College"
    let address = "695 Park Ave"
    let imageUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1"
    let text = "Public university in NYC"
    let students = [{name:"Jack",campus:"Hunter",imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1'},
                    {name:"John",campus:"Baruch",imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1'},
                    {name:"Adam",campus:"Hunter",imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1'}]
    return ( <div>
                <Navbar/>
                <div className="campusData">
                    <p> {name} </p>
                    <p> {address} </p>
                    <img src = {imageUrl}></img>
                    <button> Edit </button>
                    <button> Delete </button>
                </div>
                <h1> Students </h1>
                <div className="students">
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

export default Campus
