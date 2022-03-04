const spanWin = document.getElementById("win");
const spanLose = document.getElementById("lose");
let win = 0;
let lose = 0;

function playGame(argPlayerInput) {
  clearMessages();

  function printMessage(msg) {
    let div = document.createElement("div");
    div.innerHTML = msg;
    document.getElementById("messages").appendChild(div);
  }
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    }

    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  console.log(computerMove);

  // if (randomNumber == 1) {
  //   computerMove = "kamień";
  // } else if (randomNumber == 2) {
  //   computerMove = "papier";
  // } else {
  //   computerMove = "nożyce";
  // }
  printMessage("Mój ruch to: " + computerMove);

  // let playerInput = prompt(
  //   "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  // );

  let playerMove = getMoveName(argPlayerInput);
  console.log(argPlayerInput);

  // if (playerInput == "1") {
  //   playerMove = "kamień";
  // } else if (playerInput == "2") {
  //   playerMove = "papier";
  // } else if (playerInput == "3") {
  //   playerMove = "nożyce";
  // } else {
  //   ("wprowadzona zla cyfra");
  // }

  printMessage("Twój ruch to: " + playerMove);

  // if (playerInput == 1 || playerInput == 2 || playerInput == 3) {
  //   if (computerMove == "kamień" && playerMove == "papier") {
  //     printMessage("Ty wygrywasz!");
  //   } else if (computerMove == "papier" && playerMove == "nożyce") {
  //     printMessage("Ty wygrywasz!");
  //   } else if (computerMove == "nożyce" && playerMove == "kamień") {
  //     printMessage("Ty wygrywasz!");
  //   } else if (computerMove == playerMove) {
  //     printMessage("REMIS");
  //   } else {
  //     printMessage("Przegrałeś!");
  //   }
  // } else {
  //   printMessage("Wprowadź poprawną cyfrę");
  // }

  function displayResult(argComputerMove, argPlayerMove) {
    if (computerMove == "kamień" && playerMove == "papier") {
      win++;
      printMessage("Ty wygrywasz!");
    } else if (computerMove == "papier" && playerMove == "nożyce") {
      win++;
      printMessage("Ty wygrywasz!");
    } else if (computerMove == "nożyce" && playerMove == "kamień") {
      win++;
      printMessage("Ty wygrywasz!");
    } else if (computerMove == playerMove) {
      printMessage("REMIS");
    } else {
      lose++;
      printMessage("Przegrałeś!");
    }

    console.log(win, lose);
    spanWin.textContent = " " + win;
    spanLose.textContent = " " + lose;
  }

  displayResult(computerMove, playerMove);
}

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});
// if ((computerMove == "kamień" && playerMove == "papier") || (computerMove == "papier" && playerMove == "nożyce") || (computerMove == "nożyce" && playerMove == "kamień"))   {
//   printMessage("Ty wygrywasz!");
// } else if (computerMove == playerMove) {
//   printMessage("REMIS");
// } else {
//   printMessage("Przegrałeś!");
// }
