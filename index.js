import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import members from './students1.json'; // Practice data

const intro = <h1>Our Coding Club!</h1>;
// Take a look at what we imported
console.log(members);
// Extremely common pattern mapping array of info to array of JSX
let rows = members.map(function(u){
  return <tr key={u.netid}><td>{u.netid}</td><td>{u.firstName}</td><td>{u.lastName}</td></tr>;
});

let memberTable = <table className="myTable">
  <thead><tr><th>NetId</th><th>First</th><th>Last</th></tr></thead>
  <tbody>{rows}</tbody>
</table>;

ReactDOM.render(<section>{intro}{memberTable}</section>,
  document.getElementById('root'));


