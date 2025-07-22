let playerScore = 0;
let botScore = 0;

function play(playerChoice) {
  disableButtons();
  resetVisuals();

  const countdownEl = document.getElementById("countdown");
  const choices = ["rock", "paper", "scissor"];
  const botChoice = choices[Math.floor(Math.random() * choices.length)];

  const steps = ["Rock...", "Paper...", "Scissor...", "Shoot!"];
  let stepIndex = 0;

  countdownEl.textContent = steps[stepIndex];
  const interval = setInterval(() => {
    stepIndex++;
    if (stepIndex < steps.length) {
      countdownEl.textContent = steps[stepIndex];
    } else {
      clearInterval(interval);
      showResult(playerChoice, botChoice);
      enableButtons();
    }
  }, 500);
}

function showResult(playerChoice, botChoice) {
  document.getElementById("user-choice").textContent = `You chose: ${formatChoice(playerChoice)}`;
  document.getElementById("computer-choice").textContent = `Bot chose: ${formatChoice(botChoice)}`;

  let outcomeText = '';
  let outcomeClass = '';

  if (playerChoice === botChoice) {
    outcomeText = "It's a draw!";
    outcomeClass = 'draw';
  } else if (
    (playerChoice === "rock" && botChoice === "scissor") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissor" && botChoice === "paper")
  ) {
    outcomeText = "You win!";
    outcomeClass = 'win';
    playerScore++;
  } else {
    outcomeText = "Bot wins!";
    outcomeClass = 'lose';
    botScore++;
  }

  const outcomeEl = document.getElementById("outcome");
  outcomeEl.textContent = outcomeText;
  outcomeEl.className = outcomeClass;

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("bot-score").textContent = botScore;
}

function formatChoice(choice) {
  if (choice === "rock") return "✊ Rock";
  if (choice === "paper") return "✋ Paper";
  if (choice === "scissor") return "✌️ Scissor";
}

function disableButtons() {
  document.querySelectorAll(".choice-btn").forEach(btn => btn.disabled = true);
}

function enableButtons() {
  document.querySelectorAll(".choice-btn").forEach(btn => btn.disabled = false);
}

function resetVisuals() {
  document.getElementById("user-choice").textContent = "";
  document.getElementById("computer-choice").textContent = "";
  document.getElementById("outcome").textContent = "";
  document.getElementById("outcome").className = "";
}
