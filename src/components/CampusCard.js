import React, {Component} from 'react'
import '../styles/CampusCard.css'

class CampusCard extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <div className="CampusCard">
            <p>{this.props.name}</p>
            <img src={this.props.imageUrl}></img>
        </div>
      )
  }
}

export default CampusCard
