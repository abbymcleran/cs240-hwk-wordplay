// randomly pick 6 letter word from dictionary
let word = Math.random()*dictionary.length;
// go through each possible 3 letter word; if in dictionary, include it
// go through each possible 4 letter word; if in dictionary, include it
// go through each possible 5 letter word; if in dictioinary, include it
// include the 6 letter word
//      put all of these words into an array
let unguessed = [];
// to add to array: unguessed.push(item)

// scramble the 6 letter word and output it to the console
let letters = [];
//for each letter in the 6 letter word, add to this array and then 
    //scramble them in a random order

// display the guessed/unguessed words to the console and get their inputs
//      have an array for guessed and unguessed, guessed ones get displayed and unguessed dont
//      use splicing to create array of guessed letters?
// repeat until all words are guessed or user presses cancel
// for words not yet guessed, use dashes to hide them (one dash per letter)
let guessed = [];

// while the user is still playing the game, this will check the inputs it gives
while (unguessed!=guessed) {
    let input = prompt("Enter a guess:");
    if (input == null){
        //end the game
    }
    else if (input == "*"){
        //scramble the letters
    }
    else if (guessed.contains(input)){
        alert("Already guessed " + input + "!");
    }
    else if (unguessed.contains(input)){
        alert("Correct! " + input);
        guessed.push(input);
        //change console to show the word
        for(let x of unguessed) {
            if(guessed.contains(x)) {
                //make sure the word prints
                console.log(x);
            }
            else {
                //have the word printed as lines
            }
        }
    }
    else {
        alert(input + " is not a word!");
    }
    
}

// after the game ends, this will print the results of how the user did
console.log("You answered " + guessed.length + " out of " + unguessed.length + "!");
for(let x of unguessed) {
    console.log(x);
}


// for input from user: let input = prompt(someString);
// to print and display a dialog window: alert(someOtherString);
// to print something to console window: console.log(someOtherString);
// clear console after each guess: console.clear();

// for a given input word:
//     Alert to the user: word is not a valid English word (or too short/long)
//     Alert to the user: word has already been found
//     Alert to the user: Correct!
//     The exception is if a * was entered. When this is the case, scramble
//         the available letters and display the status of the game again.
//         Alert the user that you have done this.
// do a while loop that says while there are still words to guess or
// user presses cancel, check if it's a word or if word was already found
// and do an action accordingly
// if * used, scramble words

// if user guesses all the words:
//     Congratulate the user if they mananged to get all the words!
// if they cancel before getting all the words:
//     display the solution (all the valid words), as well as the number
//         of words the player got right!
// if (all guessed){
//    console.log.print(Congrats! You guessed all the words!)
// }
// else {
//    console.log.print(You answered __ out of __!)
// }