const max = prompt("Enter the max number :");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log("You guessed it right",random);
        break;
    }
    else if (guess<random){
        guess = prompt ("hint : Your guesss id too small..! please try again..!");
    }
    else (guess>random){
        guess = prompt ("hint : Your guess is too high..! please try again..!");
    }
}