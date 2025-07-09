let first=42;
let sec=7;

//Template Literals
console.log(`your addition is ${first+sec}`);


//Arithmetic Operator
sum=first+sec;
console.log("Sum = "+sum);
difference=first-sec;
console.log("difference = "+difference);
multiplication=first*sec;
console.log("multiplication = "+multiplication);
div=first/sec;
console.log("div = "+div);
mod=first%sec;
console.log("mod = "+mod);

//Unary Operator
console.log("pre increament = "+ sec++);
console.log("pre increament = "+ ++sec);

//Assignment Operator
first+=3;
console.log("Addition = "+first);
first-=24;
console.log("Subtraction = "+first);
first*=3;
console.log("mul = "+first);
first/=12;
console.log("div = "+first);
first%=4;
console.log("mod = "+first);

//Comparison Operator
//Conditional Operator
//eligiblity criteria
let age=14;
if(age>18){
    console.log("You are eligible for voting..!");
}

if(age<18){
    console.log("you are not eligible for voting..!");
}

//traffic light system
let color="yellow";
if(color==="red"){
    console.log("Stopp..!");
}

if(color==="green"){
    console.log("Go slow...!");
}

if(color==="yellow"){
    console.log("Slow Down..!");
}


//mraksheet system
let marks=72;
if(marks<40){
    console.log("failed..!");
}
else if(marks>=80){
    console.log("A grade..!");
}
else if(marks<80){
    console.log("c grade..!");
}


//Season System
let month="November";
if(month==="February"){
    console.log("Summer");
}
else if(month==="march"){
    console.log("Summer");
}
else if(month==="july"){
    console.log("winter");
}
else if(month==="August"){
    console.log("winter");
}
else if(month==="November"){
    console.log("Mansoon");
}
