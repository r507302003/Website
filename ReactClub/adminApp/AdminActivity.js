import React from "react";
import {tableRows} from './tablerows.js'
import activities from "../activities.json";

class AdminActivities extends React.Component{
    
    constructor(props) {
        super(props);
        this.state ={
            name:'',
            dates:'',
            time:'',
            location:'' 
        };}

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
                <input type="text"  />
                <label>Dates:</label>
                <input type="text"  />
                <label>Time:</label>
                <input type="text"  />
                <label>Location:</label>
                <input type="text"  />
                <input type="button" value="Add" />
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
            <tbody id="tbody">{tableRows}</tbody>
            </table>
        </section>
        </main>
    ); 
    }
}
export default AdminActivities;