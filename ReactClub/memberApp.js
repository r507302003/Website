import React from "react";
import ReactDOM from "react-dom";
import neptune from "./images/indexPhoto.jpg";
import Home from "./home.js"; 
import About from "./about.js";
import Login from "./login.js";
import Logout from "./logout.js";

class MemberApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "member",
            name: this.props.name,
            email:this.props.email,
            show: 'home'
        }; // We will have "user" and "admin" roles too.
    }
    
    menuHandler(item) {
        this.setState({show: item});
    }
    
    onChangeRole(newRole, newName){
        this.setState({
            role: newRole,
            name: newName
        }); 
        this.props.changeRole(newRole, newName);
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
            case 'logout':
                contents = <Logout name={this.state.name} email={this.state.email} changeRole={this.onChangeRole.bind(this)}/>;
                break;
            default:
            contents = <h1>Not implemented yet.</h1>;
            }
        
        return <div className='format'>
        <nav className='nav'>
        <ul>
            <li><a onClick={this.menuHandler.bind(this, "home")}>Home</a></li>
            <li><a onClick={this.menuHandler.bind(this, "about")}>About</a></li>
            <li><a onClick={this.menuHandler.bind(this, "activities")}>Activities</a></li>
            <li><a onClick={this.menuHandler.bind(this, "memberonly")}>MemberOnly</a></li>
            <li><a onClick={this.menuHandler.bind(this, "logout")}>Log Out</a></li>
        </ul>
        </nav>
            {contents}
        <footer>
                <p> &#127797; <small> Copyright &copy; 2020, Tien-Hui Feng vd8386 - <a href="/tos">Terms of Service</a> </small> &#127803;</p>
        </footer>
        
        </div>;
        }
}
export default MemberApp;