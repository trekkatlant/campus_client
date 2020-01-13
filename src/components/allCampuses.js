import React, {Component} from 'react'
import CampusCard from './CampusCard'
import '../styles/allCampuses.css'

class AllCampuses extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let campuses = [{name:"Harvard",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1"}
                    ,{name:"Hunter",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1"}
                    ,{name:"Baruch",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1"}];
    return <div className="AllCampuses">
              {campuses.length > 0 ?
                campuses.map((campus,index) => {
                  return <CampusCard name={campus.name} imageUrl={campus.imageUrl}/>
                })
                :
                <p>No Campuses</p>
              }
           </div>

  }
}

export default AllCampuses
