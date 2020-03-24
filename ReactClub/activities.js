import React from "react";
import activities from "./activities.json";
import neptune from "./images/activPhoto.jpg";

function Activities(props) {
    let tableRows = activities.map(function(act, i) {
        let stDates = act.dates.join(", ");
            return (
            <tr key={i}>
                <td>&nbsp;{act.name}</td>
                <td>&nbsp;{stDates}</td>
                <td>&nbsp;{act.time}</td>
                <td>&nbsp;{act.location}</td>
            </tr> );
    });
    
    return (
        <main>
        <header>
            <h1>Club Activities @ Succulent Club</h1>
            <img src={neptune} />
        </header>
        <section className="center">
            <h2>Activities</h2>
            <table id="eventsInfo" border="5" bordercolor ="#000066">
                <thead>
                <tr>
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
export default Activities;