//Q1
let arr = [1,2,3,4,5,6,2,3];
let num = 2

for(let i=0; i<arr.length;i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}

console.log(arr);

//q.2
let number = 287152;
count = 0;
let copy=number;

while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}

console.log(`count is : ${count}`);

//Q3
let n1 = 287152;
let sum = 0;
let cp = n1;

while(cp > 0){
    digit = cp % 10;
    sum+=digit;
    cp=Math.floor(cp/10);
}

console.log(`sum of digit : ${sum}`);

//Q4
let n = 5;
let factorial = 1;

for(let i=1; i<=n; i++){
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

//Q5
let arr2 = [2,5,10,4,2,7,1,9];
let largest= 0;

for(let i=0; i<=arr2.length; i++){
    if(largest < arr[i]){
        largest = arr2[i];
    }
}
console.log(`largest no. is : ${largest}`);

