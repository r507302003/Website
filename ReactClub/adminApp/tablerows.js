import React from "react";
import activities from "../activities.json";


function TableRows(props) {
    let tableRows = activities.map(function(act, i) {
        let stDates = act.dates.join(", ");
            return (
            <tr key={i}>
                <td> &nbsp;<input type="button" value="Delete" />&nbsp;</td>
                <td>&nbsp;{act.name}</td>
                <td>&nbsp;{stDates}</td>
                <td>&nbsp;{act.time}</td>
                <td>{act.location}</td>
            </tr> );
    });
}
export default TableRows;