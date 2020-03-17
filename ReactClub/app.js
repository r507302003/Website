import React from "react";
import ReactDOM from "react-dom";
import './club.css';
import Guest from './guestApp.js'; 
import Member from './memberApp.js'; 
import Admin from './adminApp.js'; 

class App extends React.Component {
    
    
    // Renders component based on current state and props
    render() {
        return (
            <div className="App">
                
            </div> ); 
                }
            }
ReactDOM.render(<App />, document.getElementById("root"));
        
        
        

        
/*
    import {Link} from "react-router"; 
    
    <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
    <li><Link to={"/user"} activeClassName ={"active"}>Home</Link></li>
*/