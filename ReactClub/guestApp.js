import React from "react";
import ReactDOM from "react-dom";
import neptune from "./images/indexPhoto.jpg";
import Home from "./index.js"; 
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
            <Home />
            </div> 
        );
    }
}
export default GuestApp;