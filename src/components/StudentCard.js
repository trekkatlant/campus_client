import React, {Component} from "react";

class StudentCard extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
          <div className="studentcard">
            <img src={this.props.imageUrl}></img>
            <p>{this.props.name}</p>
            <p>{this.props.campus}</p>
          </div>
    )
  }
}

export default StudentCard
