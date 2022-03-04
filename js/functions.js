function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

//zakomentowane bo wywalal bład Uncaught SyntaxError: Identifier 'computerMove' has already been declared

// let computerMove = `kamień`;
// let playerMove = "papier";

// printMessage(
//   "Zagrałem " +
//     computerMove +
//     "! Jeśli Twój ruch to" +
//     playerMove +
//     ", to wygrywasz!"
// );
