import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import chemElements from './elements.json'; // Practice data

function randInt(max){
  return Math.floor(Math.random()* Math.floor(max));
}

let num = randInt(100);
let range = 10;
const intro = <h2>Element with Atomic number {num} through {num + range}</h2>;

// Filter only the elements we want
let filtered = chemElements.filter(function(u){
  if (u.atomic_number >= num && u.atomic_number <= num + range )
    return true;
  else
    return false;
});
// CSS styles to be applied to elements
let liStyle = {display: "flex", justifyContent: "space-between",
  fontFamily: "sans-serif"};
let numStyle = {backgroundColor: "yellow", color: "blue", width: "10em"};
let nameStyle = {backgroundColor: "gray", color: "white", width: "10em"};
// Map pattern
let listItems = filtered.map(function(u){
  return <li key={u.symbol} style={liStyle}>
    <span style={numStyle}>Number: {u.atomic_number}, </span>
    <span style={nameStyle}>Name: {u.name}, </span>
    <span style={numStyle}>Symbol: {u.symbol},</span>
    <span style={nameStyle}>Atomic weight: {u.atomic_weight}</span></li>;
});

let elementList = <ul>
  {listItems}
</ul>;

ReactDOM.render(<section>{intro}{elementList}</section>,
  document.getElementById('root'));


