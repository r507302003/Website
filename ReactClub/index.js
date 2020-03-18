import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import neptune from "./images/indexPhoto.jpg";
import Home from "./home.js"; 
import About from "./about.js";



class Index extends React.Component {
    
    // Renders component based on current state and props
    render(){
      return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          <Home />
        </Switch>
    </Router> );
        }
}
export default Index;