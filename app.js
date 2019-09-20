const fakeButton = document.getElementById("fake-cta--button");

function greeter() {
    let name = prompt("What is your name?");
    alert(`Hello ${name}`);
}

fakeButton.addEventListener("click", greeter);
