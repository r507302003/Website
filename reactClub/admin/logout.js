import React from "react";
import ReactDOM from "react-dom";



class Logout extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            show:'logout',
            name:this.props.name,
            email:this.props.email, 
            password:''
        };
        this.setRole = this.setRole.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
    }
    
    setRole(role){
        this.setState({
            role: role,
            name: '',
            email:''
        });
        this.props.changeRole(role);
    }
    
    logoutHandler(){
        this.setRole("guest");
        fetch('/logout').then(function(response){
            console.log(response);
        });
    }

    
    // Renders component based on current state and props
    render() {
        return(
        <div className='format' >
        <header id ='header'>
            <h1> Log Out </h1>
        </header>
        <div className="center">
            <div className="form">
                <label>User Account:  </label>
                <label> {this.state.name}</label>
                <label>User Email:  </label>
                <label>{this.state.email}</label>
                <input type="button" value="Logout" onClick={() => this.logoutHandler()} />
            </div>
        </div>
        </div>
        );
    }
}

export default Logout;
