import React from "react";
import ReactDOM from "react-dom";
import './club.css';
import Guest from './guestApp.js'; 
import Member from './memberApp.js'; 
import Admin from './adminApp.js'; 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        role: "guest",
        name:''
        }
    }
    
    onChangeRole(newRole, newName){
        this.setState({
            role: newRole,
            name: newName
        }); 
    }
    
    // Renders component based on current state and props
    render() {
        let contents;
        switch (this.state.role) {
            case 'guest':
                contents = <Guest changeRole={this.onChangeRole.bind(this)} />;
                break;
                
            case 'member':
                contents = <Member changeRole={this.onChangeRole.bind(this)}/>;
                break;
                
            case 'admin':
                contents = <Admin name={this.state.name} changeRole={this.onChangeRole.bind(this)}/>;
                break;
                
            default:
                contents = <h1> Error 404</h1>;
        }
    return(
        <div>
            {contents}
        </div>
    );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
        
        