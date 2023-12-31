const game = () => {
    let pScore = 0;
    let cScore = 0;

    //starting the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScrn = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScrn.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        const winner = document.querySelector(".winner");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });
        //computer options
        const computerOptions = ['Batu','Kertas','Gunting'];

        options.forEach(options => {
            options.addEventListener("click",function() {
                //generates any random number between 0&1, multiplies it with 3, and then floor rounds off to single number.
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber]; //computer choice

                setTimeout(() => { 
                //here we will call the compareHands function
                compareHands(this.textContent,computerChoice);
                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                },2000);

                //animation
                winner.textContent = "Mari Kita Lihat...";
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

        if (pScore === 5 || cScore === 5) {
            endGame();
        }
    };

    const compareHands = (playerChoice,computerChoice) => {
        //update text
        const winnerDeclare = document.querySelector(".winner");  

        //checking all cases
        if(playerChoice === computerChoice) {
            winnerDeclare.textContent = "Hasil Seimbang !!";
            return; 
        }

        else if(playerChoice === "Batu") {
            if(computerChoice === "Gunting") {
                winnerDeclare.textContent = "Cak Yurik Menang !!";
                pScore = pScore + 1;
                updateScore();
                return;
            }
            else {
                winnerDeclare.textContent = "Computer Menang !!";
                cScore = cScore + 1;
                updateScore();
                return;
            }
        }

        else if(playerChoice === "Kertas") {
            if(computerChoice === "Gunting") {
                winnerDeclare.textContent = "Computer Menang !!";
                cScore = cScore + 1;
                updateScore();
                return;
            }
            else {
                winnerDeclare.textContent = "Cak Yurik Menang !!";
                pScore = pScore + 1;
                updateScore();
                return;
            }
        }

        else if(playerChoice === "Gunting") {
            if(computerChoice === "Kertas") {
                winnerDeclare.textContent = "Cak Yurik Menang !!";
                pScore = pScore + 1;
                updateScore();
                return;
            }
            else {
                winnerDeclare.textContent = "Computer Menang !!";
                cScore = cScore + 1;
                updateScore();
                return;
            }
        }
    };

    //End Screen
    const endGame = () => {
        const endScreen = document.querySelector(".end");
        const startOver = document.querySelector(".end button");
        const endMessage = document.querySelector(".end h1");
        const matchScreen = document.querySelector(".match");
        const textMessage = document.querySelector(".winner");
    
        if (pScore > cScore) {
          endMessage.textContent = "Cak Yurik Menang !! :)";
        } else if (pScore < cScore) {
          endMessage.textContent = "Computer Menang !! :(";
        } else {
          endMessage.textContent = "Its a Tie !!";
        }
        matchScreen.classList.remove("fadeIn");
        endScreen.classList.add("fadeIn");
    
        startOver.addEventListener("click", () => {
          resetGame();
          matchScreen.classList.add("fadeIn");
          endScreen.classList.remove("fadeIn");
          textMessage.textContent = "Pilih Opsi:";
        });
      };
    
      // reset Game
      const resetGame = () => {
        pScore = 0;
        cScore = 0;
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        playerHand.src = `./assets/Batu.png`;
        computerHand.src = `./assets/Batu.png`;
        updateScore();
      };

    //calling all inner functions
    startGame();
    playMatch();
};

//starting the game function
game();
