import React, {Component} from 'react';

class Campus extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let name = "Hunter College"
    let address = "695 Park Ave"
    let imageUrl = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ff.hypotheses.org%2Fwp-content%2Fblogs.dir%2F1204%2Ffiles%2F2013%2F04%2Fhunter-college-logo.png&f=1&nofb=1"
    let text = "Public university in NYC"
    return ( <div>
                <div className="campusData">
                    <p> {name} </p>
                    <p> {address} </p>
                    <img src = {imageUrl}></img>
                    <button> Edit </button>
                    <button> Delete </button>
                </div>
                <div className="students">
                    <p> Students </p>
                </div>
             </div>
    )
  }
}

export default Campus
