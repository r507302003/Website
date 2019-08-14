import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Function Component Definition
function Welcome(props) { // Start with Capital
    return <h1> Hello, {props.name} </h1>; // returns JSX
}
// Function component use -- looks like custom HTML
let contents = <section>
        <Welcome name="Web Development" />
        <Welcome name="Dr. B" />
        </section>;

ReactDOM.render(contents,
    document.getElementById('root')
);


