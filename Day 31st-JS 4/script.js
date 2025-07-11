//Q1.
let num=48;
if(num % 10 == 0){
  console.log("Good");
}
else{
  console.log("bad");
}

//Q2.
let name = prompt("Enter your name :");
let age = prompt("Enter your Age :");
alert(`${name} is ${age} years old`);

//Q3.
let quarter=3;

switch(quarter){
  case 1 :
  console.log("Jan","Feb","March");
  break;
  case 2 :
  console.log("April","May","june");
  break;
  case 3 :
  console.log("july","Aug","Sep");
  break;
  case 4 :
  console.log("Oct","Nov","Dec");
  break;
  default : ("invalid quaeter number..!");  
}






//Q4.
let str="aapita";
if((str[0]==='A'||str[0]==='a')&&(str.length>5)){
  console.log("Golden String");
}
else{
  console.log("not golden string")
}

let first=13;
let sec=5;
let third=17;

//Q5
if(first>sec){
  if(first>third){
    console.log("first is gerater..!")
  }
  else{
    console.log("third is grater");
  }
}  
else{
  console.log("sec id greater");
}  

//Q6
let n1=38;
let n2=12342;

if((n1%10===2)&&(n2%10===2)){
  console.log("same last digit..!");
}
else{
  console.log("not same..!");
}