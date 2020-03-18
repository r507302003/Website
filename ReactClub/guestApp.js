import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import neptune from "./images/indexPhoto.jpg";
import Index from "./index.js"; 

class GuestApp extends React.Component {
    constructor(props) {
        super();
        this.state = {
        role: "guest" 
        };
    }
    // Renders component based on current state and props
    render() {
        return(
        <div className="guest">
            <Index />
            </div> 
        );
    }
}
export default GuestApp;