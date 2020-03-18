import React from "react";
import ReactDOM from "react-dom";
import neptune from "./images/indexPhoto.jpg";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import Index from './index.js'; 
class AdminApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "admin",
            memberOnly:true, 
            editActive: true
        }; // We will have "user" and "admin" roles too.
    }
    // Renders component based on current state and props
    render() {
        return(
        <div className="admin">
            <Index memberOnly= {this.state.memberOnly} editActive={this.state.editActive}/>
            </div> 
        );
    }
}
export default AdminApp;