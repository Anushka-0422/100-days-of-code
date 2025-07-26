//Array Methods
//1.foreach
//1
let arr = [1,2,3,4,5];
function printElement(el){
    console.log(el);
}
arr.forEach(printElement);

//2
let arr1=['a','b','c','d','e'];
arr1.forEach(function fs(pl){
    console.log(pl);
});

//3
let arr2=[{
    name: 'Anushka',
    age: 20
},
{
    name: 'Rohan',
    age: 20
},
{
    name: 'Krushna',
    age: 20
}
]
arr2.forEach((stud)=>{
    console.log(stud);
});

//2.Map -1 
let num = [1,2,3,4,5,6];
let double=num.map((n)=>{
    return n*2;
});
console.log(double);

//-2
let stud = [{
    name: 'Anushka',
    marks: 87
},
{
    name: 'Rohan',
    marks: 92
},
{
    name: 'Krushna',
    marks: 89
}
]
let gpa=stud.map((stud)=>{
    return stud.marks/10;
});
console.log(gpa);

//3.Filter -1
let num1 = [1,2,3,4,5,6];
let even = num1.filter((num)=>{
    return num%2==0;
});
console.log(even);

//-2
let num2 = [1,2,3,4,5,6];
let odd = num1.filter((num)=>{
    return num%2!=0;
});
console.log(odd);

//3.every -1
let num3 = [1,2,3,4,5,6];
let isEven = num3.every((num)=>{
    return num%2==0;
});
console.log(isEven);

//3.every -1
let num4 = [1,2,3];
let finalvalue = num4.reduce((res, el) => {
    return res + el;
}, 0);
console.log(finalvalue);

//4.some -1
let num5 = [1,2,3,4];
let finalval = num5.some((num) => {
    return num > 10;
});
console.log(finalval);

//5.reduce -1
let num6 = [1,2,3,4,5];
let ans=num6.reduce((res,el)=>res+el);
console.log(ans);