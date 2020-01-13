import React, { Component } from 'react';
import {link} from 'react-router-dom';
import {Navbar} from "react-bootstrap";
import "../styles/Navbar.css"
class Navbar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="navbar">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Scratch</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>

            </div>
        );
    }
}

export default Navbar;