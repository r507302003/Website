import React from 'react';
import ReactDOM from 'react-dom';
import {Quiz} from './question';
import Intro from './intro';
import Summary from './summary';
import questions from './questions.json';

let intro = <Intro user="CS351" />;
let quiz = <Quiz questions={questions} />;
let summary = <Summary user="CS351" score="9/10" minutes={11}/>;

let state = "intro";
let contents = [intro, quiz, summary];

ReactDOM.render(
    contents,
  document.getElementById('root')
);
