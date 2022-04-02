// random value generated 
var y = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses 
// made for correct Guess 
var guess = 1;

document.getElementById("submitguess").onclick = function () {

    // number guessed by user	 
    var x = document.getElementById("guessField").value;
    if(x==''){
        alert("INPUT SHOULD NOT BE EMPTY");
    }
    else if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " +
            guess + " GUESS ");
    } else if (x > y){
        guess++;
        alert("OOPS SORRY! TRY A SMALLER NUMBER");
    }
    else if(x<y){
        guess++;
        alert("OOPS SORRY! TRY A GREATER NUMBER")
    }
    else{
        alert('INPUT SHOULD BE A NUMBER');
    }
}
