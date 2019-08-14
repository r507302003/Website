import React from 'react';
import ReactDOM from 'react-dom';
import Question from './question';
import questions from './questions.json';

let allQs = questions.map(function(mChoice, i){
  return <Question key={"q" + i} multiChoiceQ={mChoice} />
});

let contents = <div><h1>Quiz-o-Matic</h1>{allQs}</div>;

ReactDOM.render(
    contents,
  document.getElementById('root')
);
