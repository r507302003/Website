import React from "react";
import ReactDOM from "react-dom";


function ActivityTable(props) {
    let trows = props.activities.map(function(act, i){
        return (
            <tr key={"act" + i}><td>
            <button onClick={props.del.bind(null, i)}>Delete</button></td>
            <td>{act.name}</td>
            <td>{act.dates}</td>
            <td>{act.time}</td>
            <td>{act.location}</td>
            </tr>
        );  
    });
    return (
        <table id="eventsInfo" border="5" bordercolor ="#000066">
        <thead>
        <tr>
        <td> Delete </td>
            <td>&nbsp;Event Name</td>
            <td>&nbsp;Dates</td>
            <td>&nbsp;Time</td>
            <td>&nbsp;Location</td>
        </tr>
            </thead>
        <tbody>
            {trows}
        </tbody>
    </table>
    );
}

export default ActivityTable;
