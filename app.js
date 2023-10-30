// let message = document.querySelector(".message");

// console.log(document.querySelector(".score").textContent =
//  "12");


let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);
let score = 20;
let check = document.querySelector(".check");
check.addEventListener("click",function(){
    
 // let highScore = parseInt(document.querySelector(".high-score").value);

    let guess = parseInt(document.querySelector(".guess").value);
    console.log(guess);
    console.log(typeof(guess));
    //inputs from a checkbox are strings, not numbers!
    //parseInt converts string to integer...
    if (!guess){
        document.querySelector(".message").textContent = "Please enter an integer between 1 and 20";
   
    }
    else if (guess === secretNumber){
        document.querySelector(".message").textContent = "Correct Number!";
        // highScore = parseInt(document.querySelector(".high-score").textContent = score);
    //notice the difference between value and textContent
    //when using parseInt
    document.querySelector(".question-mark").textContent = secretNumber;
    }
    else if (guess > secretNumber){
        
        if (score > 1) {
            document.querySelector(".message").textContent = "Too High!";
            score = score - 1;
            document.querySelector(".score").textContent = score;
        }
        else{
            document.querySelector(".message").textContent =
            "You've lost the game";
            document.querySelector(".score").textContent = 0;
            document.querySelector(".question-mark").textContent = secretNumber;
        }
      
    }

    else if (guess < secretNumber){
        if (score > 1){
        document.querySelector(".message").textContent = "Too Low!";
        --score;
        document.querySelector(".score").textContent = score;
        
    }
        else{
            document.querySelector(".message").textContent =
            "You lost the game!"
            document.querySelector(".score").textContent = 0;
            document.querySelector(".question-mark").textContent = secretNumber;
        }

}

}); //don't forget the semi-colon!

//here is why score > 1 works...
//when score = score - 1 yields 1, it is stored as the 
//variable score...and nothing happens until we click again!

//when we click, score > 1 will be false, and the statment
//jumps to the next expression.