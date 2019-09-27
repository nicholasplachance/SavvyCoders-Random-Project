import Header from "./components/Header.js";
import Nav from "./components/Navigation.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

console.log(Header, Nav, Main, Footer);

document.querySelector("#root").innerHTML = `
  ${Header(`class="header">Nick LaChance Practice Project`)}
  ${Nav()}
  ${Main()}
  ${Footer()}
`
