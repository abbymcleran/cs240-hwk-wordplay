// to use the words from the dictionary provided
let dict = []
dict.push('words_alpha.js'.dictionary);

// randomly pick 6 letter word from dictionary
let word = Math.random()*dict.length;
while (word.length != 6){
    word = Math.random()*dict.length;
}

// hold the letters of the word in an array
let letters = [];
for (let i=0; i<6; i++){
    letters.push(word[i]);
}

// array for holding the different word combinations
let unguessed = [];

// array to hold the correctly guessed words
let guessed = [];

// array holding scrambled letters
let scramble = [];

// function to be used for checking if a letter combination is a word
    function wordCheck(a, b, c, d, e, f) {
    let tempWord = a+b+c+d+e+f;
    if (dict.contains(tempWord)){
        unguessed.push(tempWord)
    }
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

// checking for 3-letter words from letter combinations
for(let a=0; a<6; a++){
    for(let b=0; b<6; b++){
        for(let c=0; c<6; c++){
            if(a!=b && b!=c && a!=c) {
                wordCheck(letters[a], letters[b], letters[c]);
            }
        }
    }
}
// checking for 4-letter words from letter combinations
for(let a=0; a<6; a++){
    for(let b=0; b<6; b++){
        for(let c=0; c<6; c++){
            for(let d=0; d<6; d++){
                if(a!=b && b!=c && a!=c && a!=d && b!=d && c!=d) {
                    wordCheck(letters[a], letters[b], letters[c], letters[d]);
                }
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
                    if(a!=b && b!=c && a!=c && a!=d && b!=d && c!=d && a!=e && b!=e && c!=e && d!=e) {
                        wordCheck(letters[a], letters[b], letters[c], letters[d], letters[e]);
                    }
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
                        if(a!=b && b!=c && a!=c && a!=d && b!=d && c!=d && a!=e && b!=e && c!=e && d!=e && a!=f && b!=f && c!=f && d!=f && e!=f) {
                            wordCheck(letters[a], letters[b], letters[c], letters[d], letters[e], letters[f]);
                        }
                    }
                }
            }
        }
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