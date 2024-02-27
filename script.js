let timer;
let timeLeft = 25 * 60; // Initial time is 25 minutes
let isPaused = false;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("pauseResumeBtn").style.display = "inline-block";
}

function togglePauseResume() {
  if (isPaused) {
    startTimer();
    document.getElementById("pauseResumeBtn").innerText = "Pause";
  } else {
    pauseTimer();
    document.getElementById("pauseResumeBtn").innerText = "Resume";
  }
  isPaused = !isPaused;
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateDisplay();
  isPaused = false; // Ensure the timer is not paused after reset
  document.getElementById("startBtn").style.display = "inline-block";
  document.getElementById("pauseResumeBtn").style.display = "none";
  document.getElementById("pauseResumeBtn").innerText = "Pause"; // Reset button text
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    updateDisplay();
  } else {
    // Timer is up, reset to 5 minutes for a break
    timeLeft = 5 * 60;
    alert("Pomodoro complete! Take a short break.");
    updateDisplay();
  }
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const displayTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById("timer").innerText = displayTime;
}

// Set a fixed size for the timer and buttons
function setFixedSize() {
  const fixedSize = '4em'; // You can adjust the fixed size as needed
  document.getElementById("timer").style.fontSize = fixedSize;

  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.style.fontSize = `${(parseFloat(fixedSize) / 4)}em`; // Set one-fourth of the fixed size
  });
}

// Call setFixedSize() when the page loads
window.onload = setFixedSize;
