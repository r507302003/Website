import React from "react";
import ReactDOM from "react-dom";


class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email:'', 
            password:'',
            name:''
        };
        this.setRole = this.setRole.bind(this);
        this.loginInfo = this.loginInfo.bind(this);
    }
    
    setRole(role, name){
        this.setState({
            role: role,
            name: name
        });
        this.props.changeRole(role, name);
    }
    
    loginInfo(){
        if(this.state.email === 'admin@email.org'){
            this.setRole('admin', ''); 
           }
        else if(this.state.email === 'member@email.org'){
            this.setRole('member', '');
            }
        else {
            alert('Account Not Exist');
        }
    }

    
    // Renders component based on current state and props
    render() {
        return(
        <div className='format' >
            <header id ='header'>
                <h1> Login </h1>
            </header>
            <div className="center">
                <form className="form">
                    <label> Email: </label>
                    <input type="email" onChange={(e) => this.setState({ email: e.target.value })} />
                    <label>Password:</label>
                    <input type="password" onChange={(e) => this.setState({ password: e.target.value })} />
                    <input type="button" value="Submit" onClick={() => this.loginInfo()} />
                </form>
            </div>
        </div>
        );
    }
}

export default Login;
