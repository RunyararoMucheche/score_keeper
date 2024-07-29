const resetButton = document.querySelector("#reset");
const selectScore = document.querySelector("#playTo");
let isGameOver = false;
let winningScore = 5;

const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

selectScore.addEventListener("change", () => {
  winningScore = parseInt(selectScore.value);
  reset();
});

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

resetButton.addEventListener("click", reset);

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.innerText = `${player.score}`;
  }
}
function reset() {
  isGameOver = false;
  p1.score = 0;
  p2.score = 0;
  p1.display.innerText = "0";
  p2.display.innerText = "0";
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-danger", "has-text-success");
  p1.button.disabled = false;
  p2.button.disabled = false;
}
