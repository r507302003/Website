import React from 'react';
import ReactDOM from 'react-dom';
import {Quiz} from './question';
import Intro from './intro';
import Summary from './summary';
import questions from './questions.json';


class QuizOMatic extends React.Component {
  constructor(props) {
    super(props); // Must call
    // a member variable called "state" to hold the state as a JS object
    this.state = {
      show: "intro", questions: questions,
      user: "CS351", score: "0/0", minutes: 12
    };
  }

  introHandler(event) {
    console.log(event);
    console.log(event.target)
    console.log("You pressed a button");
    this.setState({show: "intro"});
  }

  quizHandler(event) {
    this.setState({show: "quiz"});
  }

  resultHandler(event) {
    this.setState({show: "summary"});
  }

  render() {
    let contents = null;
    let buttonBar = <div className="buttonBar">
      <button onClick={this.introHandler.bind(this)}>Intro</button>
      <button onClick={this.quizHandler.bind(this)}>Quiz Me</button>
      <button onClick={this.resultHandler.bind(this)}>Results</button>
    </div>;

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
    return <div>
      {buttonBar}
      <main>
        <h1>Quiz-O-Matic</h1>
        {contents}
      </main>
    </div>
  }
}

ReactDOM.render(
  <QuizOMatic/>,
  document.getElementById('root')
);
