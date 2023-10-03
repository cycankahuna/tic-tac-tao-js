const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let running = false;

initializeGame();

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s Turn`;
  running = true;
}

function cellClicked(e) {
  const cellIndex = e.target.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  changePlayer();
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer == "x" ? "O" : "x";
  statusText.textContent = ` ${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winCondition.length; i++) {
    const condition = winCondition[i];
    let cellA = options[condition[1]];
    let cellB = options[condition[2]];
    let cellC = options[condition[3]];

    function checkWinner() {
      let roundWon = false;

      // Iterate through each winning condition
      for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        // Check if any of the cells in the condition are empty
        if (cellA == "" || cellB == "" || cellC == "") {
          continue;
        }

        // Check if all three cells in the condition have the same symbol
        if (cellA == cellB && cellB == cellC) {
          roundWon = true;
          break;
        }
      }

      // If a round is won, display the winner and set running to false
      if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
      }
      // If there are no empty cells left, display a draw and set running to false
      else if (!options.includes("")) {
        statusText.textContent = "Draw!";
        running = false;
      }
      // Otherwise, change the player
      else {
        changePlayer;
      }
    }

    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer} Won`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = "Draw!";
    running = false;
  } else {
    changePlayer;
  }
}

function restartGame() {
  currentPlayer = "x";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}
