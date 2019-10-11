// index.js file inside ROOT DIRECTORY
import { Header, Navigation, Main, Footer } from "./components";
import * as state from "./store";
import { link } from "fs";

console.log(state);

// Use state to render the appropriate heading, depending on the 'state' of the app
// What page is currently selected or being currently displayed


// import Header from "./components/Header.js";
// import Nav from "./components/Navigation.js";
// import Main from "./components/Main.js";
// import Footer from "./components/Footer.js";

function renderState(st = state.Home) {
  return (document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Navigation()}
  ${Main()}
  ${Footer()}
`);
}

renderState();

const links = document.querySelectorAll("nav a, footer a");
// console.log(Array.from(links));

links.forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  renderState(state[event.target.textContent]);
}));
