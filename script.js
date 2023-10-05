let currentPlayer = "X";

const arr = Array(9).fill(null);

function HandleClick(el) {
  const id = Number(el.id);
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  currentPlayer = currentPlayer == "X" ? "O" : "X";
}
