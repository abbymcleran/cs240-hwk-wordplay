// connect the dictionary from other js file to this js file
import { dictionary } from './words_alpha.js'

// randomly pick 6 letter word from dictionary
let word = Math.random()*dictionary.length;
while (word.length != 6){
    word = Math.random()*dictionary.length;
}

// hold the letters of the word in an array
let letters = [];
for (let i=0; i<6; i++){
    letters.push(word.charAt(i));
}

// array for holding the different word combinations
let unguessed = [];

// array to hold the correctly guessed words
let guessed = [];

// array holding scrambled letters
let scramble = [];

// go through each possible 3 letter word; if in dictionary, include it
// go through each possible 4 letter word; if in dictionary, include it
// go through each possible 5 letter word; if in dictioinary, include it
// include the 6 letter word
//      put all of these words into an array
// to add to array: unguessed.push(item)



// see what words can be made from the letters
// to add to array: unguessed.push(item)
// create a function for checking if word works, then can just call function
    // and input #s for letter places
function wordCheck(a, b, c, d, e, f) {
    // concatenate the letters into a string
    // check if the word is in the dictionary
}

// function for scrambling letters
function letterScramble() {
    while (scramble.length < 6){
        temp = letters[Math.random()*6];
        if (!scramble.contains(temp)){
            scramble.push(temp);
        }
    }
}

// function for outputting the scrambled letters as well as the blank spaces for
// possible words; words that have been guessed will show up
function outputInfo() {
    for(let i = 0; i < unguessed.length; i++) {
        if(guessed.contains(unguessed[i])) {
            //print the word
            console.log(unguessed[i]);
        }
        else {
            //have the word printed as lines
            spaces = unguessed[i].length;
            if (spaces == 3){
                console.log("_ _ _");
            }
            else if (spaces == 4){
                console.log("_ _ _ _");
            }
            else if (spaces == 5){
                console.log("_ _ _ _ _")
            }
            else{
                console.log("_ _ _ _ _ _")
            }   
        }
    }
}

// function for showing results at the end of the game
function endOfGame() {
    console.log("You answered " + guessed.length + " out of " + unguessed.length + "!");
    for(let i = 0; i < unguessed.length; i++) {
        console.log(unguessed[i]);
    }
    if (guessed.length == unguessed.length){
        alert("Congrats! You guessed all the words!")
    }
}

// while the user is playing the game, this will check the inputs given
while (unguessed!=guessed) {
    outputInfo();
    let input = prompt("Enter a guess:");
    if (input == null){
        endOfGame();
    }
    else if (input == "*"){
        letterScramble();
    }
    else if (guessed.contains(input)){
        alert("Already guessed " + input + "!");
    }
    else if (unguessed.contains(input)){
        alert("Correct! " + input);
        guessed.push(input);
    }
    else {
        alert(input + " is not a word!");
    }
    console.clear();
}

// call endOfGame() function once the user is done with the game
endOfGame();