import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CampusCard from './CampusCard';
import '../styles/allCampuses.css';
import Navbar from './navbar';
import {fetchAllCampusesThunk, addCampusThunk,removeCampusThunk, editCampusThunk} from '../store/utilities/campuses';
import { connect } from 'react-redux';
class AllCampuses extends Component{
  constructor(props){
    super(props);
    this.state = {
      addCampus: false
    }
  }

  componentDidMount(){
    this.props.fetchAllCampusesThunk();
  }

  show = () => (
    this.props.allCampuses.map(campus=> {
      return(
        <CampusCard campus={campus} removeCampus={this.props.removeCampus} handleChange={this.handleChange} handleSubmit={this.handleEdit} />
      )
    })
  )

handleChange = name => ({select}) => {
  this.setState({
    [name]: select.value
  });
}

toggleEdit = () => {
  this.setState({
    addCampus: !this.state.addCampus
  });
}

handleAddNew = (event) => {
  event.preventDefault();
  const campObj = {
    "name": this.state.name,
    "imageUrl": this.state.imageUrl,
    "description": this.state.description,
    "address": this.state.address,
  }
  console.log(campObj);
  this.props.addCampus(campObj);
  this.toggleEdit();
}

handleEdit = (id) => {
  const campObj = {
    "id": id,
    "name": this.state.name,
    "imageUrl": this.state.imageUrl,
    "description": this.state.description,
    "address": this.state.address,
  }
  this.props.editCampus(id, campObj);
  console.log(campObj);
}

  render(){
    return(
      <div>
        <div className="head">
          <Navbar />
          <h1> All Campuses </h1>
        </div>
        <button> Add New Campus </button>
        <div className="AllCampuses">
          {this.show()}
        </div>
      </div>
    ) 
  }
}
   
const mapState = (state) => {
  return{
    AllCampuses: state.AllCampuses
  }
}
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
    removeCampus: (id) => dispatch(removeCampusThunk(id)),
    editCampus: (id, campus) => dispatch(editCampusThunk(id, campus))
  }
}

        



export default connect(mapState, mapDispatch)(AllCampuses);
