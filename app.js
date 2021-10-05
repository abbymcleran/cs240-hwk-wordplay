// randomly pick 6 letter word from dictionary
let wordVal = Math.floor(Math.random()*61337);
let word = dictionary[wordVal];
if(word.length != 6){
while (word.length != 6){
    wordVal = Math.floor(Math.random()*61337);
    word = dictionary[wordVal];
}
}

// hold the letters of the word in an array
let letters = [];
for (let i=0; i<6; i++){
    letters.push(word[i]);
}

// array for holding the different word combinations
let unguessed = [];

// functions to be used for checking if a letter combination is a word
function wordCheck3(a, b, c) {
    let tempWord = a+b+c;
    if (!unguessed.includes(tempWord)){
        if (dictionary.includes(tempWord)){
            unguessed.push(tempWord)
        }
    }
}
function wordCheck4(a, b, c, d) {
    let tempWord = a+b+c+d;
    if (!unguessed.includes(tempWord)){
        if (dictionary.includes(tempWord)){
            unguessed.push(tempWord)
        }
    }
}
function wordCheck5(a, b, c, d, e) {
    let tempWord = a+b+c+d+e;
    if (!unguessed.includes(tempWord)){
        if (dictionary.includes(tempWord)){
            unguessed.push(tempWord)
        }
    }
}
function wordCheck6(a, b, c, d, e, f) {
    let tempWord = a+b+c+d+e+f;
    if (!unguessed.includes(tempWord)){
        if (dictionary.includes(tempWord)){
            unguessed.push(tempWord)
        }
    }
}
    

// checking for 3-letter words from letter combinations
for(let a=0; a<6; a++){
    for(let b=0; b<6; b++){
        for(let c=0; c<6; c++){
                wordCheck3(letters[a], letters[b], letters[c]);
        }
    }
}
// checking for 4-letter words from letter combinations
for(let a=0; a<6; a++){
    for(let b=0; b<6; b++){
        for(let c=0; c<6; c++){
            for(let d=0; d<6; d++){
                    wordCheck4(letters[a], letters[b], letters[c], letters[d]);
            }
        }
    }
}
// checking for 5-letter words from letter combinations
for(let a=0; a<6; a++){
    for(let b=0; b<6; b++){
        for(let c=0; c<6; c++){
            for(let d=0; d<6; d++){
                for(let e=0; e<6; e++){
                        wordCheck5(letters[a], letters[b], letters[c], letters[d], letters[e]);
                }
            }
        }
    }
}
// checking for 6-letter words from letter combinations
for(let a=0; a<6; a++){
    for(let b=0; b<6; b++){
        for(let c=0; c<6; c++){
            for(let d=0; d<6; d++){
                for(let e=0; e<6; e++){
                    for(let f=0; f<6; f++){
                            wordCheck6(letters[a], letters[b], letters[c], letters[d], letters[e], letters[f]);
                    }
                }
            }
        }
    }
}

// array holding scrambled letters
let scramble = [];

// function for scrambling letters
function letterScramble() {
    let temp =[];
    for (let i=0; i<letters.length; i++){
        temp.push(letters[i]);
    }
    for (let i=0; i<letters.length; i++){
        let randIndex = Math.floor(Math.random()*(temp.length));
            scramble[i] = temp.splice(randIndex, 1);
        }
    }

// make a call to scramble the letters
letterScramble();

// array to hold the correctly guessed words
let guessed = [];

// make call for user input and print scrambled letters and blank lines
// function for outputting the scrambled letters as well as the blank spaces for
// possible words; words that have been guessed will show up
function outputInfo() {
    console.clear();
    console.log(scramble[0]+" "+scramble[1]+" "+scramble[2]+" "+scramble[3]+" "+scramble[4]+" "+scramble[5]);
    for(let i = 0; i < unguessed.length; i++) {
        if(guessed.includes(unguessed[i])) {
            console.log(unguessed[i]);
        }
        else {
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

// make a call to outputInfo() and ask the user for input to start the game
outputInfo();
let input = prompt("Enter a guess:");

// while the user is playing the game, this will check the inputs given
while (guessed.length!=unguessed.length) {
    outputInfo();
    let input = prompt("Enter a guess:");
    if (input == null){
        endOfGame();
    }
    if (input == "*"){
        letterScramble();
    }
    else if (guessed.includes(input)){
        alert("Already guessed " + input + "!");
    }
    else if (unguessed.includes(input)){
        alert("Correct! " + input);
        guessed.push(input);
    }
    else {
        alert(input + " is not a word!");
    }
    console.clear();
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

// call endOfGame() function once the user is done with the game
endOfGame();