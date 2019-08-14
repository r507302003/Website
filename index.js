import React from 'react';
import ReactDOM from 'react-dom';
import {Quiz} from './question';
import Intro from './intro';
import Summary from './summary';
import './index.css';
import questions from './questions.json';


class QuizOMatic extends React.Component {
    constructor(props) {
        super(props); // Must call
        // a member variable called "state" to hold the state as a JS object
        this.state = {show: "intro", questions: questions,
            user: "CS351", score: "0/0", minutes: 12};
    }

    // Renders component based on current state and props
    render() {
        let contents = null;

        switch (this.state.show) {
            case "intro":
                contents = <Intro user={this.state.user}/>;
                break;
            case "quiz":
                contents = <Quiz questions={this.state.questions}/>;
                break;
            case "summary":
                contents = <Summary user={this.state.user} score={this.state.score}
                            minutes={this.state.minutes}/>;
                break;
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
        }

        return <div><h1>Quiz-O-Matic</h1>
          {contents}
        </div>
    }
}

ReactDOM.render(
    <QuizOMatic />,
  document.getElementById('root')
);
