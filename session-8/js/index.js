import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";

// ********************************************** TASK 1 **********************************************
// Creating <button> element
const populationButton = document.createElement("button");

// Creating text for the button element
const buttonText = document.createTextNode("Show Population");

// Adding text to button element
populationButton.appendChild(buttonText);

// Adding onclick
populationButton.onclick = displayPopulation;

// Adding button to body
document.body.appendChild(populationButton);

// ********************************************** MINI-TASK **********************************************
// createListOfFruits(fruits);

// ********************************************** Add Events **********************************************
const x = document.querySelector("#clickMe");
const y = document.querySelector("#hovering");

x.addEventListener("click", respondClick);
y.addEventListener("mouseover", respondMouseOver);
y.addEventListener("mouseout", respondMouseOut);

function respondMouseOver() {
  document.querySelector("#effect").innerHTML += "MouseOver Event" + "<br>";
}

function respondMouseOut() {
  document.querySelector("#effect").innerHTML += "MouseOut Event" + "<br>";
}

function respondClick() {
  document.querySelector("#effect").innerHTML += "Click Event" + "<br>";
}

// ********************************************** Remove Events **********************************************
document
  .querySelector("#remove-handler")
  .addEventListener("mousemove", randomNumber);

function randomNumber() {
  document.querySelector("#random-number").innerHTML = Math.random();
}

const task3 = document.querySelector("#remove-handler-button");
task3.addEventListener("click", removeHandler);

function removeHandler() {
  document
    .querySelector("#remove-handler")
    .removeEventListener("mousemove", randomNumber);
}
