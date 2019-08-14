import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import questions from './questions.json';

function randInt(max){
  return Math.floor(Math.random()* Math.floor(max));
}

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

let mChoice = questions[randInt(questions.length)];

let contents = <div><h1>Quiz-o-Matic</h1>
        <Question multiChoiceQ={mChoice} />
    </div>;

ReactDOM.render(
    contents,
  document.getElementById('root')
);


