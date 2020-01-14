import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import "../styles/Navbar.css"
class Navbar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="navbar">
            <ul>
            <Link to ="/">
               <li>Home</li>
            </Link>
            <Link to="/students">
                <li className="campuses">
                    All students
                </li>
            </Link>
            <Link to ="/campuses">
                <li className="campuses">
                    All Campuses
                </li>
            </Link>
            
            </ul>
            </div>
        );
    }
}

export default Navbar;