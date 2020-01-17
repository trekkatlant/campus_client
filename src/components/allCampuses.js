// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import CampusCard from './CampusCard';
// import '../styles/allCampuses.css';
// import Navbar from './navbar';
// import {fetchAllCampusesThunk, addCampusThunk,removeCampusThunk, editCampusThunk} from '../store/utilities/campuses';
// import { connect } from 'react-redux';
// class AllCampuses extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       addCampus: false
//     }
//   }

//   componentDidMount(){
//     this.props.fetchAllCampusesThunk();
//   }

//   show = () => (
//     this.props.allCampuses.map(campus=> {
//       return(
//         <CampusCard campus={campus} removeCampus={this.props.removeCampus} handleChange={this.handleChange} handleSubmit={this.handleEdit} />
//       )
//     })
//   )

// handleChange = name => ({select}) => {
//   this.setState({
//     [name]: select.value
//   });
// }

// toggleEdit = () => {
//   this.setState({
//     addCampus: !this.state.addCampus
//   });
// }

// handleAddNew = (event) => {
//   event.preventDefault();
//   const campObj = {
//     "name": this.state.name,
//     "imageUrl": this.state.imageUrl,
//     "description": this.state.description,
//     "address": this.state.address,
//   }
//   console.log(campObj);
//   this.props.addCampus(campObj);
//   this.toggleEdit();
// }

// handleEdit = (id) => {
//   const campObj = {
//     "id": id,
//     "name": this.state.name,
//     "imageUrl": this.state.imageUrl,
//     "description": this.state.description,
//     "address": this.state.address,
//   }
//   this.props.editCampus(id, campObj);
//   console.log(campObj);
// }

//   render(){
//     return(
//       <div>
//         <div className="head">
//           <Navbar />
//           <h1> All Campuses </h1>
//         </div>
//         <button> Add New Campus </button>
//         <div className="AllCampuses">
//           {this.show()}
//         </div>
//       </div>
//     ) 
//   }
// }
   
// const mapState = (state) => {
//   return{
//     AllCampuses: state.AllCampuses
//   }
// }
// const mapDispatch = (dispatch) => {
//   return {
//     fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
//     addCampus: (campus) => dispatch(addCampusThunk(campus)),
//     removeCampus: (id) => dispatch(removeCampusThunk(id)),
//     editCampus: (id, campus) => dispatch(editCampusThunk(id, campus))
//   }
// }

// export default connect(mapState, mapDispatch)(AllCampuses);




import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NewCampusPopUp from './NewCampusPopUp';
// Additional Redux store imports;
import { connect } from "react-redux";
import {fetchAllCampusThunk, deleteCampusThunk, addCampusThunk, editCampusThunk} from '../store/utilities/campuses';
import CampusCard from './CampusCard';
import '../styles/allCampuses.css';

class allCampuses extends Component {
  constructor() {
    super();
    this.state = {
      addCampus: false
    }
  }

  componentDidMount(){
    this.props.fetchAllCampus();
  }

  display = () =>(
    this.props.allCampuses.map(item=>{
      return (
        <CampusCard
        campus={item}
        deleteCampus={this.props.deleteCampus}
        handleChange={this.handleChange}
        handleSubmit={this.handleEdit}
        />
      )
    })
  )

  toggleEdit=()=>{
    this.setState({
      addCampus: !this.state.addCampus
    })
  }

  handleChange = name => ({ target }) =>{
    this.setState({ 
      [name]: target.value
    }); 
  }
  
  handleNew = (event) =>{
    event.preventDefault();
    const arr= {
      "name":this.state.name,
      "address":this.state.address,
      "description":this.state.description,
      "image": "https://www.fullstackacademy.com/images/fa-logo.png"
    }
    console.log(arr);
    this.props.addCampus(arr);
    this.toggleEdit();
  }  

  handleEdit = (id) =>{
    const arr={
        "id":id,
        "name":this.state.name,
        "address":this.state.address,
        "description":this.state.description,
        "image": "https://www.fullstackacademy.com/images/fa-logo.png"
    }
    this.props.editCampus(id,arr);
    console.log(arr);
  }  

  render() {
    return (
        <div> 
          <div className = "title">
            <h1>Campus Manager</h1>
          </div>
          <Link to="/students"><button>Students</button></Link>
          <button onClick={this.toggleEdit}> Add Campus </button>
            {this.state.addCampus? 
              (<NewCampusPopUp 
                close={this.toggleEdit}
                submit={this.handleNew}
                handleChange={this.handleChange}
              />)
            :(<div></div>)}
          <div className="wrap">
            <div className="display">
              {this.display()}
            </div>
          </div>
        </div>
    )
  }
}

const mapState = (state) => {
  return {
    allCampuses :state.allCampuses
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAllCampus: () => dispatch(fetchAllCampusThunk()),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    addCampus: (arr) => dispatch(addCampusThunk(arr)),
    editCampus: (id,arr) => dispatch(editCampusThunk(id,arr))
  }
}

export default connect(mapState, mapDispatch)(allCampuses);
