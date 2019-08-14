import React from 'react';

function Choices(props) {
    // Creates an array of list item JSX elements with key
	let listItems = props.choices.map(function(choice, i) {
        return <li key={"choice" + i}>{choice}</li>;});
    // Set some styling on the list note that
    // list-style-type becomes listStyleType
    let choiceStyle = {listStyleType: "lower-alpha"};
    return <ol style={choiceStyle}>
        {listItems}
        </ol>;
}

function Question(props) {
    return <div>
        <p>{props.multiChoiceQ.question}</p>
        <Choices choices={props.multiChoiceQ.choices} />
    </div>;
}

export default Question;


