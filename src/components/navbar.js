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
            <Link to ="/">
               <button className="homebutton">
                Home
               </button>
               </Link>
            </div>
        );
    }
}

export default Navbar;