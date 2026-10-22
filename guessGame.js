let numToGuess=69;
let guessedNum=prompt("guess any number:");
let numberOfTryes=0;
while(guessedNum!=numToGuess){
    if(guessedNum>numToGuess){
        guessedNum=prompt("goo lower...!");
        numberOfTryes++;
    }
    else if(guessedNum<numToGuess){
        guessedNum=prompt("goo higher...!");
        numberOfTryes++;
    }
}
console.log("you won...");
console.log("number of tryes:",numberOfTryes);
