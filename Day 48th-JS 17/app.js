let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor = "yellow";
});

function sayhello() {
    alert("hello");
}

function sayname() {
    alert("clicked");
}

let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("Para was clicked..!");
})

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function () {
    console.log("mouse inside box");
})