import React from 'react';

function Summary(props) {
    let user = "Friend";
    if (props.user) {
        user = props.user;
    }
    return <div>
        <h2>Summary</h2>
        <p>{user} scored {props.score}, in {props.minutes} minutes.</p>
        <p>Keep up the good work and come back soon!</p>
    </div>;
}

export default Summary;


