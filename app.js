// querySelector will only grab the first occurrence of the element
const fakeButton = document.getElementById("fake-cta--button");

function greeter() {
    const name = prompt("What is your name?");
    fakeButton.textContent = `Hello ${name}`;
}

fakeButton.addEventListener("click", greeter);
