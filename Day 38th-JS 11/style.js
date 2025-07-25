const max = prompt("Enter the max number :");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess === "quit") {
        console.log("User quit");
        break;
    }

    const numGuess = Number(guess);

    if (numGuess === random) {
        console.log("You guessed it right", random);
        break;
    } else if (numGuess < random) {
        guess = prompt("hint : Your guess is too small..! please try again..!");
    } else if (numGuess > random) {
        guess = prompt("hint : Your guess is too high..! please try again..!");
    }else {
        guess = prompt("Invalid input. Please enter a number or 'quit'.");
    }
}    