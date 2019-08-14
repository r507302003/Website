import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function windSpeed() {
      return 25*Math.random();
}

let intro = <h1>Hello Website Development!</h1>;
let wind = windSpeed();
if (wind > 12) {
  intro = <h1>Go Sailing!</h1>
}
let report = <div>
              <p>The windspeed is {wind.toFixed(1)}.</p>
              </div>;

ReactDOM.render(<section>
  {intro}
  {report}
  </section>,
  document.getElementById('root'));


