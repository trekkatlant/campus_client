import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1 id="title">
                    Welcome to Campus Manager!
                </h1>
                <div class="choice">
                    <Link to "#">
                    <img src="#"></img>
                    </Link>
                    <Link to "#">
                    <img src="#"></img>
                    </Link>
                </div>
            </div>
        )
    }
}