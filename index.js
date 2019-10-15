// index.js file inside ROOT DIRECTORY


// Object destructing, it replaces dot-notation, and pulls specifically
import { Header, Navigation, Main, Footer } from "./components";

// Pulls everything from "./store", pulls generally
import * as state from "./store";

// console.log(state);

// Use state to render the appropriate heading, depending on the 'state' of the app
// What page is currently selected or being currently displayed


// import Header from "./components/Header.js";
// import Nav from "./components/Navigation.js";
// import Main from "./components/Main.js";
// import Footer from "./components/Footer.js";

function renderState(event, st = state.Home) {
  (document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Navigation()}
  ${Main(st)}
  ${Footer()}
`);
const links = document.querySelectorAll("nav a, footer a");
// console.log(Array.from(links));

links.forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  renderState(state, state[event.target.textContent]);
}));
}

renderState();
