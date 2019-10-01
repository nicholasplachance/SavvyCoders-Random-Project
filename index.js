// index.js file inside ROOT DIRECTORY
import { Header, Navigation, Main, Footer} from "./components"


// Use state to render the appropriate heading, depending on the 'state' of the app
// What page is currently selected or being currently displayed
const state = {
  Home: {
    heading: "Home Page"
  },
  About: {
    heading: "About Page"
  }
}

// import Header from "./components/Header.js";
// import Nav from "./components/Navigation.js";
// import Main from "./components/Main.js";
// import Footer from "./components/Footer.js";

document.querySelector("#root").innerHTML = `
  ${Header(state.Home.heading)}
  ${Navigation()}
  ${Main()}
  ${Footer()}
`
