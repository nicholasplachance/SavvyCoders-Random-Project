// index.js file inside ROOT DIRECTORY
import { Header, Navigation, Main, Footer } from "./components";

// Use state to render the appropriate heading, depending on the 'state' of the app
// What page is currently selected or being currently displayed
const state = {
  home: {
    heading: "Home Page"
  },
  about: {
    heading: "About Page"
  },
  contact: {
    heading: "Contact Page"
  },
  blog: {
    heading: "Blog Page"
  },
  gallery: {
    heading: "Gallery Page"
  }
};

// import Header from "./components/Header.js";
// import Nav from "./components/Navigation.js";
// import Main from "./components/Main.js";
// import Footer from "./components/Footer.js";

function renderState(st = state.home) {
  return (document.querySelector("#root").innerHTML = `
  ${Header(st.heading)}
  ${Navigation()}
  ${Main()}
  ${Footer()}
`);
}

renderState();

const links = document.querySelectorAll("nav a");
// console.log(Array.from(links));

for (let i = 0; i < links.length; i++) {
  console.log(links[i].textContent);
  links[i].addEventListener("click", (event) => {
    event.preventDefault();
    renderState(state[event.target.textContent.toLowerCase()]);
  });
}

//
