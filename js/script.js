let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = "nieznany ruch";

if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else {
  computerMove = "nożyce";
}
printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = "nieznany ruch";

if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else if (playerInput == "3") {
  playerMove = "nożyce";
} else {
  ("wprowadzona zla cyfra");
}

printMessage("Twój ruch to: " + playerMove);

if (playerInput == 1 || playerInput == 2 || playerInput == 3) {
  if (computerMove == "kamień" && playerMove == "papier") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "papier" && playerMove == "nożyce") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "nożyce" && playerMove == "kamień") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == playerMove) {
    printMessage("REMIS");
  } else {
    printMessage("Przegrałeś!");
  }
} else {
  printMessage("Wprowadź poprawną cyfrę");
}

// if ((computerMove == "kamień" && playerMove == "papier") || (computerMove == "papier" && playerMove == "nożyce") || (computerMove == "nożyce" && playerMove == "kamień"))   {
//   printMessage("Ty wygrywasz!");
// } else if (computerMove == playerMove) {
//   printMessage("REMIS");
// } else {
//   printMessage("Przegrałeś!");
// }
