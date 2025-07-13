for (let i = 1; i <= 5; i++) {
    console.log("Hello, world!", i);
}

//
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum =", sum);

//
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

//
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Warning: Will run forever!
// for (;;) {
//     console.log("Infinite loop!");
// }

//
// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(${num} x ${i} = ${num * i});
// }

//
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += "* ";
    }
    console.log(row);
}

//
let i = 1;
while (i <= 5) {
    console.log("i =", i);
    i++;
}

//
let favMovie = prompt("Enter your favorite movie:");
console.log("Your favorite movie is:", favMovie);