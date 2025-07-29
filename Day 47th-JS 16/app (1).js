//Q1
let para1 = document.createElement("p");
para1.innerText = "Hey , I'm Red !";
document.querySelector('body').append(para1);
para1.classList.add('red');

//Q2
let h3 = document.createElement("h3");
h3.innerText = "Hey , I'm Blue..!";
document.querySelector('body').append(h3);
h3.classList.add('blue');

//Q3
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm is a div";
para2.innerText = "Me too..!";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector('body').append(div);

//Q4
let button = document.createElement("button");
button.innerText = "Click Me.!";
document.querySelector("div").insertAdjacentElement("beforeend",button);

let h4 = document.createElement("h4");
h4.innerText = "Enter your Name : ";
document.querySelector("body").append(h4);

let input = document.createElement("input");
document.querySelector("body").append(input);

//Q5
button.setAttribute("id", "button");
input.setAttribute("placeholder", "Your name");

//Q6
let btn = document.querySelector("button");
btn.style.backgroundColor = "black";
btn.style.color = "white";

//Q7
let h2 = document.createElement("h2");
h2.innerText = "DOM Practice..!";
document.querySelector('body').append(h2);
h2.classList.add('red');

//Q8
let p = document.createElement("p");
p.innerHTML = "Apna College <b> Delta </b>Practice";
document.querySelector("body").append(p);