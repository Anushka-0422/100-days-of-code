const calculator = {
    num: 55,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    } 
}

//Qs1.Write a JavaScript function that returns array elements larger than a number.
let arr=[1,2,3,4,5,6,7,72,23];
let num= 8;

function  largerthan(arr,num){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
largerthan(arr,num);

//Qs2.Write a JavaScript function to extract unique characters from a string.
let str="abcdabcdefgggh";
function uniqueChars(str) {
    let unique = "";
    for (let i = 0; i < str.length; i++) {
        if (unique.indexOf(str[i]) === -1) {
            unique += str[i];
        }
    }
    return unique;
}
console.log(uniqueChars(str));