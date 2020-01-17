// import React, {Component} from "react";

// class StudentCard extends Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return (
//           <div className="studentcard">
//             <img src={this.props.imageUrl}></img>
//             <p>{this.props.firstName} {" "} {this.props.lastName}</p>
//             <p>{this.props.campus}</p>
//           </div>
//     )
//   }
// }

// export default StudentCard


import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Popup from "./StudentPopup";
import "../styles/allStudentsCard.css"

class StudentCard extends Component { 
    constructor(props){  
        super(props);  
        this.state = { 
            showPopup: false 
        };  
    }  

    handlePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render () {
        return(
            <div className="Card">
                <div className="image">
                    <img src={this.props.image}></img>
                </div>
                <div className="bottom">
                    <div className="top-left">
                        <Link to={`/students/${this.props.id}`}>
                            {this.props.firstName} {this.props.lastName}
                        </Link>
                        
                    </div>
                    <div className="bottom-left">
                        {this.props.editStudent ? (
                        <div>
                        <button onClick={this.handlePopup}>Edit</button>  
                            {this.state.showPopup ? (
                                <Popup 
                                firstName = {this.props.firstName} 
                                lastName = {this.props.lastName}  
                                closePopup={this.handlePopup} 
                                campuses={this.props.campuses}
                                editStudent={this.props.editStudent}
                                id={this.props.id}
                                />
                            )
                        : (null) }
                        </div>
                        ): (<div></div>)}

                        
                    </div>
                    <div className="bottom-right">
                        <button onClick={()=>this.props.removeStudent(this.props.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default StudentCard;