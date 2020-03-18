import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import './club.css';
import Guest from './guestApp.js'; 
import Member from './memberApp.js'; 
import Admin from './adminApp.js'; 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        role: "member" 
        };
    }
    
    // Renders component based on current state and props
    render() {
        if(this.state.role == "admin"){
            return (
                <div className="App">
                    <Admin />
                </div> 
            ); 
        }
        else if(this.state.role == "member"){
            return (
                <div className="App">
                    <Member />
                </div> 
            ); 
        }
        else{
            return(
                <div className="App">
                    <Guest />
                </div>
            );
        }
                }
            }

ReactDOM.render(<App />, document.getElementById("root"));
        
        