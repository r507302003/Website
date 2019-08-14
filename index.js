import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const intro = <h1>Hello Website Development!</h1>;
function windSpeed() {
      return 25*Math.random();
}

let mySail = 6.6;
let report = <div><p>Sailing on my {mySail}.</p>
              <p>The windspeed is {windSpeed().toFixed(1)}.</p>
              </div>;

ReactDOM.render(<section>
  {intro}
  {report}
  </section>,
  document.getElementById('root'));


