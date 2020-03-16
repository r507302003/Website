import React from 'react';

function Intro(props) {
    let greeting = <h2>Hello Friend!</h2>;
    if (props.user) {
        greeting = <h2>Hello {props.user}</h2>
    }
    return <div>
        {greeting}
        <p>This is the Quiz-o-matic app and it will help you hone your HTML, CSS, and JavaScript skills!</p>
    </div>;
}

export default Intro;


