import React from "react";
import ReactDOM from "react-dom";
import neptune from "./images/indexPhoto.jpg";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import About from './about.js';


    
class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        show: "home" 
        };
    }
    
    notImplemented(e){
        let bodyText = document.getElementById("bodyText"); 
        bodyText.innerHTML = `<h1> Not Implemented Yet </h1>`; 
        this.setState({
        show: e
        }); 
    }
    
    // Renders component based on current state and props
    render() {
        return(
        <div className='format'>
            <div className='nav'>
                <nav>
                    <ul>
                        <li className="active"><a href="/home">Home page</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#" onClick={() => this.notImplemented()}>Activities</a></li>
                        <li><a href="#" onClick={() => this.notImplemented()}>Membership</a></li>
                        <li><a href="#" onClick={() => this.notImplemented()}>Login</a></li>
                    </ul>
                </nav>
            </div>
            <div id='bodyText'>
                <header id ='header'>
                    <h1>Welcome to Succulent club</h1>
                    <img src={neptune} />
                </header>
                <div className="center">
                    <h2>What is succulents?</h2>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Succulents, are plants with parts that are thickened, fleshy and engorged, usually to retain water in arid climates or soil conditions. <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;The word "succulent" comes from the Latin word sucus, meaning juice, or sap. Succulent plants may store water in various structures, such as leaves and stems. Some definitions also include roots, thus geophytes that survive unfavorable periods by dying back to underground storage organs may be regarded as succulents. 
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; In horticultural use, the term "succulent" is sometimes used in a way which excludes plants that botanists would regard as succulents, such as cacti. Succulents are often grown as ornamental plants because of their striking and unusual appearance, as well as their ability to thrive with relatively minimal care. (cite from wiki)</p>
                </div>
                <footer>
                <p> &#127797; <small> Copyright &copy; 2020, Tien-Hui Feng vd8386 - <a href="/tos">Terms of Service</a> </small> &#127803;</p>
                </footer>
            </div>
        </div>
        );
    }
}
export default Home;

