import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const CampusCard = props => {
  const campus = props.campus;
  return(
    <div className="campusCard">
      <div className="campic">
        <img className="campusImage" src={campus.imageURL}></img>
      </div>
      <div className="campusDesc">
        <p className="info">{`Name: ${campus.name}`}</p>
        <p className="info">{`Campus id: ${campus.campusId}`}</p>
      </div>
    </div>
  )
}

export default CampusCard;
