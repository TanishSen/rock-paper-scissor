let userScore = 0;
let compScore = 0;

const winSound = new Audio("sounds/YouWin.mp3");
const loseSound = new Audio("sounds/YouLose.mp3");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScr = document.querySelector("#user-score");
const compScr = document.querySelector("#comp-score");

const genCompChoice = () => {
  //stone,paper,scissor
  let options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerHTML = "Draw !";
};

const showWinner = (userWin) => {
  if (userWin) {
    console.log("Win");
    msg.innerHTML = "🎉 You Win 🎉";
    userScr.innerHTML++;
    winSound.play();
  } else {
    console.log("Lose");
    msg.innerHTML = "😿 Cat Win 😿";
    compScr.innerHTML++;
    loseSound.play();
  }
};

const playGame = (userChoice) => {
  console.log("User =", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp =", compChoice);

  if (userChoice === compChoice) {
    //Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else if (userChoice === "scissor") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
