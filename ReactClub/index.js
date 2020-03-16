import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest"}; // We will have "user" and "admin" roles too.
    }
    // Renders component based on current state and props
    render() {
        return <div><p>Your home page here to start</p> </div>;
    }
}
ReactDOM.render(<App />, document.getElementById("root"));