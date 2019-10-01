// index.js file inside ROOT DIRECTORY
import { Header, Navigation, Main, Footer} from "./components"

// import Header from "./components/Header.js";
// import Nav from "./components/Navigation.js";
// import Main from "./components/Main.js";
// import Footer from "./components/Footer.js";

document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Navigation()}
  ${Main()}
  ${Footer()}
`
