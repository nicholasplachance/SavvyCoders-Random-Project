// querySelector will only grab the first occurrence of the element
const fakeButton = document.querySelector("#fake-cta--button");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const navUl = document.querySelector("nav ul");

function greeter(question = "What is your name") {
  let answer = prompt(question);

  if (answer === "") {
    return greeter();
  }

  return answer;
}

fakeButton.addEventListener("click", function() {
  fakeButton.innerHTML = `Hello ${greeter()}!`;
});

hamburgerIcon.addEventListener("click", () => {
  navUl.classList.toggle("is-hidden--mobile");
});
