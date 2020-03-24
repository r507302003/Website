import React from "react";
import ReactDOM from "react-dom";
import neptune from "./images/indexPhoto.jpg";
import Home from "./home.js"; 
import About from "./about.js";
import Login from "./login.js"; 
import Activities from "./activities.js";

class GuestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "guest",
            show: 'home'
        };
    }
    
    onChangeRole(newRole, newName){
        this.setState({
            role: newRole,
            name: newName
        }); 
        this.props.changeRole(newRole, newName);
    }
    
    menuHandler(item) {
        this.setState({show: item});
    }
    
    // Renders component based on current state and props
    render() {
        let contents;
        switch (this.state.show) {
            case 'home':
                contents = <Home />;
                break;
            case 'about':
                contents = <About />;
                break;
            case 'activities':
                contents = <Activities />;
                break;
            case 'login':
                contents = <Login changeRole={this.onChangeRole.bind(this)}/>;
                break;
            default:
            contents = <h1>Not implemented yet.</h1>;
            }
        
        return <div className='format'><nav className='nav'>
        <ul>
            <li><a onClick={this.menuHandler.bind(this, "home")}>Home</a></li>
            <li><a onClick={this.menuHandler.bind(this, "about")}>About</a></li>
            <li><a onClick={this.menuHandler.bind(this, "activities")}>Activities</a></li>
            <li><a onClick={this.menuHandler.bind(this, "membership")}>Membership</a></li>
            <li><a onClick={this.menuHandler.bind(this, "login")}>Login</a></li>
        </ul>
        </nav>
            {contents}
        <footer>
                <p> &#127797; <small> Copyright &copy; 2020, Tien-Hui Feng vd8386 - <a href="/tos">Terms of Service</a> </small> &#127803;</p>
        </footer>
        
        </div>;
        }
}
export default GuestApp;



 