// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function() {
//     console.log(inp.value);
//     p.innerText= inp.value;
// });

// Mouseout
document.getElementById("demo").addEventListener("mouseout", function () {
    alert("Mouse out event triggered!");
});

// Keypress
document.querySelector("input").addEventListener("keypress", function (e) {
    console.log("Key pressed: ", e.key);
});

// Scroll
window.addEventListener("scroll", function () {
    console.log("Scrolled!");
});

// Load
window.addEventListener("load", function () {
    console.log("Page fully loaded.");
});

//click
document.getElementById("colorBtn").addEventListener("click", function () {
    this.style.backgroundColor = "green";
});

// Input event to filter username input
const input = document.getElementById("usernameInput");
const output = document.getElementById("usernameOutput");

input.addEventListener("input", function () {
// Allow only letters and space
const filtered = input.value.replace(/[^a-zA-Z ]/g, "");
output.textContent = filtered;
});