let rand = Math.floor(Math.random*6)+1 ;
   console.log(rand);

function hello(){
    console.log("Anushka");
}

hello();
hello();

function student(){
    console.log("Avishkar");
}

student();

function number(){
    for(i=1; i<=10; i++){
        console.log(i);
    }
}

number();

function vote() {
    let age = 16;
    if(age >= 18) {
        console.log("eligible for voting");
    }
    else {
        console.log("Not eligible for voting");
    }
}

vote();

function poem(){
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are..");
    console.log("Up above world so high ");
    console.log("Like a diamond in the sky..!!!");
}

poem();


function rollDice(){
   let rand = Math.floor(Math.random() * 6) + 1;
   console.log(rand);
}

rollDice();

function printName(name,age){
    console.log(`${name}'s age is ${age}`);
}

printName("Sukanya",21);
printName("Anushka",19);
printName("Tanuja",20);
printName("Rutuja");

function sum(a,b){
    console.log(a+b);
}

sum(4,8);
sum(843,321);
sum(23,34);

function avg(a,b,c){
    console.log((a+b+c)/3);
}

avg(80,90,100);
avg(23,34,67);

function table(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

table(2);
table(17);

function add(a,b){
    return a + b;
}

console.log(add(add(4,8),4));

function isAdult(age){
    
    if(age >= 18){
        return"Adult";
    }else{
        return"Not Adult";
    }
}

function addition(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}


addition(10);
addition(50);

let str = ["hi","hello","bye"];
function concat(str) {
    let result = "";

    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result
}

let greet = "hello"; //globle scope

function changegreet (){
    let greet = "Namaste"; //Function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet); //lexical scope
    }

    innerGreet();
}

console.log(greet);
changegreet();

let name = "Anushka"; 

let sum=function(a,b){
    return a + b;
}

function multiplegreet(func,count) {
    for(let i=1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello, World!");
}

multiplegreet(greet, 10);