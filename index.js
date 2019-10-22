// index.js file inside ROOT DIRECTORY


// Object destructing, it replaces dot-notation, and pulls specifically
import { Header, Navigation, Main, Footer } from "./components";

// Pulls everything from "./store", pulls generally
import * as state from "./store";

// Import node module: navigo
import Navigo from "navigo";
import axios from "axios"
import { capitalize } from "lodash"


// Import firebase db
import { db } from "./firebase"

console.log(db)

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    // TODO: Using response.data[0]
    state.Blog.main += response.data.map(({title, body})=>
      `<article>
      <h2 class="sub-header">${title}</h2>
      <p>${body}</p>
      </article>`
  ).join("")

  if ( router.lastRouteResolved().params && capitalize(router.lastRouteResolved().params.page) === "Blog") {
    renderState(state.Blog)
  }

  });


// The uppercase "N" for "Navigo" represents that it is a constructor function

const router = new Navigo(location.origin);
// console.log(Navigo);
// console.log(router);



// console.log(state);

// Use state to render the appropriate heading, depending on the 'state' of the app
// What page is currently selected or being currently displayed


// import Header from "./components/Header.js";
// import Nav from "./components/Navigation.js";
// import Main from "./components/Main.js";
// import Footer from "./components/Footer.js";

function renderState(st = state.Home) {
  (document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Navigation()}
  ${Main(st)}
  ${Footer()}
`);
  router.updatePageLinks();
  const navUl = document.querySelector("nav ul");
  const hamburgerIcon = document.querySelector("#hamburger-icon");
  hamburgerIcon.addEventListener("click", ()=> {
    navUl.classList.toggle("is-hidden--mobile");
  })

}

router
  // Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
  .on(":page", params =>
    renderState(state[capitalize(params.page)])
  )
  .on("/", () => renderState())
  // TODO - Create a 404 page and route all bad routes to that page
  .resolve();
// console.log(window.location.pathname)
// console.log(location.pathname.slice(1));



