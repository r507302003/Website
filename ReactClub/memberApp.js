import React from "react";
import ReactDOM from "react-dom";
import neptune from "./images/indexPhoto.jpg";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import Index from './index.js'; 

class MemberApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "member",
            memberOnly: true, 
        }; // We will have "user" and "admin" roles too.
    }
    // Renders component based on current state and props
    render() {
        return(
        <div className="member">
            <Index memberOnly= {this.state.memberOnly} />
            </div> 
        );
    }
}
export default MemberApp;