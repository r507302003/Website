import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import About from './about.js';
import Home from './home.js';
import App from './app.js';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            show: "login", 
            email:'', 
            password:''
        };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    
    handleEmail(e) {
        this.setState({email: e.target.value});
    }
    handlePassword(e) {
        this.setState({password: e.target.value});
    }
    
    notImplemented(e){
        let bodyText = document.getElementById("bodyText"); 
        bodyText.innerHTML = `<h1> Not Implemented Yet </h1>`; 
        this.setState({
        show: e
        }); 
    }
    
    loginInfo(){
        if(this.state.email == 'admin@email.org'){
           <App />
           }
        else if(this.state.email == 'member@email.org'){
                
            }
        else {
            alert('Account Not Exist');
        }
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
                {this.props.editActive ?
                    <li><a href="#" onClick={() => this.notImplemented('editActivities')}>editActivities</a></li>
                    :<li><a href="#" onClick={() => this.notImplemented('Activities')}>Activities</a></li> }
                {this.props.memberOnly ?
                    <li><a href="#" onClick={() => this.notImplemented('MemberOnly')}>MemberOnly</a></li>
                    :<li><a href="#" onClick={() => this.notImplemented('Membership')}>Membership</a></li> }
                {this.props.memberOnly ? 
                    <li><a href="#" onClick={() => this.notImplemented('Logout')}>Logout</a></li>
                    :<li><a href="/login">Login</a></li>
                }
                </ul>
            </nav>
            </div>
            <div id='bodyText'>
                <header id ='header'>
                    <h1> Login </h1>
                </header>
                <div className="center">
                    <form className="container" onSubmit={this.loginInfo}>
                        <label> Email: </label>
                        <input type="email" email={this.props.email} onSubmit={this.handleEmail} />
                        <label>Password:</label>
                        <input type="password" password={this.props.password} onSubmit={this.handlePassword}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <footer>
                <p> &#127797; <small> Copyright &copy; 2020, Tien-Hui Feng vd8386 - <a href="/tos">Terms of Service</a> </small> &#127803;</p>
                </footer>
            </div>
        </div>
        );
    }
}
export default Login;

        /*
        <form className="container">
                        <label htmlFor="mail">Email: </label>
                        <input type="text" value={this.state.email} onChange={this.handleChange} />
                        <label htmlFor="password">Password:</label>
                        <input type="text" value={this.state.password} onChange={this.handleChange}/>
                        <input type="button" id="login" name="login" value="Login" onClick={() => this.loginInfo(document.getElementById('email').value, document.getElementById('password').value)} />  
                    </form>
                    */
