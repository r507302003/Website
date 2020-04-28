import React from "react";
import ReactDOM from "react-dom";
import activities from "../activities.json";
import ActivityTable from "./activityTable.js";


class AdminActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: activities,
            addName: "",
            addDate: "", 
            addTime: "",
            addLocation: ""
        };
    }

    addActivity() {
        // We need to create a new object with new sub-array
        let act = {
            name: this.state.addName,
            dates: this.state.addDate,
            time: this.state.addTime,
            location: this.state.addLocation};
        this.setState({activities: this.state.activities.concat(act)});
    }
    
    delActivity(index) {
        let updateActivities = this.state.activities.filter((act, i) => index !== i);
        this.setState({activities: updateActivities});
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
                    <input type="text" id='name'   onChange={(e) => this.setState({ addName: e.target.value })} />
    
                <label>Dates:</label>
                    <input type="text"   onChange={(e) => this.setState({ addDate: e.target.value })} />
    
                <label>Time:</label>
                    <input type="text"   onChange={(e) => this.setState({ addTime: e.target.value })} />
                
                <label>Location:</label>
                    <input type="text"   onChange={(e) => this.setState({ addLocation: e.target.value })} />
                <input type="button" value="Add" onClick = {this.addActivity.bind(this)} />
            </form>    
        </section>
        <section className="center">
            <h2>Activities</h2>
            <ActivityTable activities={this.state.activities} del={this.delActivity.bind(this)} />
        </section>
        </main>
        ); 
    }
        
}
   
export default AdminActivity;