import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import "../styles/Home.css";
class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            //<div className="navbar">
            
            <div className="home">
            <Navbar />
                <h1 id="title">
                    Welcome to Campus Manager!
                </h1>
                <div class="choice">
                    <Link to="/campuses">
                        <h1 className="campus">Check Out All Campuses</h1>
                        
                    </Link>
                    <Link to="/students">
                        <h1 className="students">Check Out All Students</h1>
                    </Link>
                </div>
                </div>
                
            //</div>
        )
    }
}
export default Home;