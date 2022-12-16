//  Variable : ALL radio buttons for level choice:
// let radioButton = document.querySelector("input[name='lvl']");

//**********************************************************************************************************************
// LOOPS : setting the random guess number for each level
// const radioButtons = document.querySelectorAll("input[name='lvl']");
let guess;
let max;

function generateGuess (maxGuess) {
    // radioButtons[i].addEventListener("click", () => {
    // if (radioButtons[i].checked) {
        guess = Math.floor(Math.random() * maxGuess + 1);
        console.log(guess); 
        return guess, maxGuess;     
// }})
};


//**********************************************************************************************************************
let picture = document.getElementById("picture");
let win = document.getElementById("win");
let loss = document.getElementById("loss");
let restartButton = document.getElementById("restartButton");
let input = document.getElementById("input");
let instruction = document.getElementById("instruction");
let chanceCount = document.getElementById("chanceCount");
let chanceMax;


function WinOrLoose (chanceMax, maxGuess) { 
btnSubmit.addEventListener("click", () => {   
    if( (input.value<0) || (input.value>maxGuess) || isNaN(input.value) ) {
    instruction.innerText = 'Choose a number between 0 and ' + maxGuess + '';
    }else{
        if(chanceMax>=0) {
            if(input.value == guess && chanceMax>=0) {  
                instruction.innerText  = "YOU WON WOOHOOO! play again? ";
                input.disabled = true;
                restartButton.style.display = "inline";  
                btnSubmit.replaceWith(restartButton);
                win.style.display = "flex";  
                picture.replaceWith(win);
            }

            else if(input.value > guess && chanceMax>0)  {
                instruction.innerText  = "Your guess was too high!";
                chanceCount.innerText  = "Number of chances left:" + chanceMax;
                chanceMax--;
            }

            else if(input.value < guess && chanceMax>0) {
                instruction.innerText  = "Your guess was too low!";
                chanceCount.innerText  = "Number of chances left:" + chanceMax;
                chanceMax--;
            }             

            else if(input.value !== guess  && chanceMax==0) {
                instruction.innerText  = " Lol your guess was incorrect again !";
                chanceCount.innerText  = "No chances left, please restart the game";
                input.disabled = true;
                restartButton.style.display = "inline";  
                btnSubmit.replaceWith(restartButton);
                loss.style.display = "flex";  
                picture.replaceWith(loss);
            }
}
}

})};
        
            
//**********************************************************************************************************************
// CALLBACKS inside onchange functions of the levels easy medium and hard of the previous gameplay functions:

const btnSubmit = document.getElementById("btnSubmit");

function easy() {
    generateGuess(10);
    WinOrLoose(2, 10);
};

function medium() {
   generateGuess(100);
   WinOrLoose(5, 100);   
};

function hard() {
   generateGuess(1000);
   WinOrLoose(10, 1000);   
};




//**********************************************************************************************************************
// ENABLING DISPLAY OF SOME CSS STUFF FOR RESULTS
// variables

