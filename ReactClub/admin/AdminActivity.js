import React from "react";
import ReactDOM from "react-dom";
import activities from "../activities.json";

function TableRows(props){
    let tableRows = activities.map(function(act, i) {
        let stDates = act.dates.join(", ");
            return (
            <tr key={i}>
                <td><input type='button' value="Delete" /></td>
                <td>&nbsp;{act.name}</td>
                <td>&nbsp;{stDates}</td>
                <td>&nbsp;{act.time}</td>
                <td>&nbsp;{act.location}</td>
            </tr> );
    });
    return tableRows;
}


class AdminActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            dates:'',
            time:'', 
            location:''
        };
    }

    addRows(){
        let newRows = this.state.activities;
        activities.push('new act');
        this.setState({
            name: this.state.name,
            dates: this.state.dates,
            time: this.state.time,
            location: this.state.location,
                      })
    }
    
    
    
    render(){
    return (
        <main>
        <header>
            <h1>Club Activities @ Succulent Club</h1>
        </header>
        <section className="addEvent">
            <h2><small>Add Activity</small></h2>
            <form className="form">
                <label> Name: </label>
                    <input type="text" id='name'   onChange={(e) => this.setState({ name: e.target.value })} />
    
                <label>Dates:</label>
                    <input type="text"   onChange={(e) => this.setState({ dates: e.target.value })} />
    
                <label>Time:</label>
                    <input type="text"   onChange={(e) => this.setState({ time: e.target.value })} />
                
                <label>Location:</label>
                    <input type="text"   onChange={(e) => this.setState({ location: e.target.value })} />
                <input type="button" value="Add" onClick={()=>this.addRows()} />
            </form>    
        </section>
        <section className="center">
            <h2>Activities</h2>
            <table id="eventsInfo" border="5" bordercolor ="#000066">
                <thead>
                <tr>
                    <td>Delete</td>
                    <td>&nbsp;Event Name</td>
                    <td>&nbsp;Dates</td>
                    <td>&nbsp;Time</td>
                    <td>&nbsp;Location</td>
                </tr>
                </thead>
                <tbody id="tbody"><TableRows /></tbody>
            </table>
        </section>
        </main>
        ); 
    }
        
}
   
export default AdminActivity;