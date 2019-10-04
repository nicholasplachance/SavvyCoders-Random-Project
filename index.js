// index.js file inside ROOT DIRECTORY
import { Header, Navigation, Main, Footer } from "./components";

// Use state to render the appropriate heading, depending on the 'state' of the app
// What page is currently selected or being currently displayed
const state = {
  home: {
    heading: "Home Page",
    links: ["Home",
    "About",
    "Contact",
    "Blog",
    "Gallery"]
  },
  about: {
    heading: "About Page",
    links: ["Home",
    "About",
    "Contact",
    "Blog",
    "Gallery"]
  },
  contact: {
    heading: "Contact Page",
    links: ["Home",
    "About",
    "Contact",
    "Blog",
    "Gallery"]
  },
  blog: {
    heading: "Blog Page",
    links: ["Home",
    "About",
    "Contact",
    "Blog",
    "Gallery"]
  },
  gallery: {
    heading: "Gallery Page",
    links: ["Home",
    "About",
    "Contact",
    "Blog",
    "Gallery"]
  }
};

// import Header from "./components/Header.js";
// import Nav from "./components/Navigation.js";
// import Main from "./components/Main.js";
// import Footer from "./components/Footer.js";

function renderState(st = state.home) {
  return (document.querySelector("#root").innerHTML = `
  ${Header(st.heading)}
  ${Navigation(st)}
  ${Main()}
  ${Footer()}
`);
}

renderState();

const links = document.querySelectorAll("nav a");
// console.log(Array.from(links));

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (event) => {
    event.preventDefault();
    // Use bracket notation due to the target.textContent being a string
    renderState(state[event.target.textContent.toLowerCase()]);
  });
}

//
