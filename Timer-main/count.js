document.addEventListener("DOMContentLoaded", () => {
    const timerDisplay = document.getElementById("timerDisplay");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const resetButton = document.getElementById("resetButton");
    let timer;
    let startTime;
    let elapsedTime = 0;
    let running = false;
  
    function formatTime(ms) {
      const totalSeconds = Math.floor(ms / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
  
    function pad(num) {
      return num.toString().padStart(2, "0");
    }
  
    function updateTimer() {
      const now = Date.now();
      const deltaTime = now - startTime;
      elapsedTime += deltaTime;
      timerDisplay.textContent = formatTime(elapsedTime);
      startTime = now;
    }
  
    function startTimer() {
      if (!running) {
        startTime = Date.now();
        timer = setInterval(updateTimer, 1000);
        running = true;
      }
    }
  
    function stopTimer() {
      clearInterval(timer);
      running = false;
    }
  
    function resetTimer() {
      clearInterval(timer);
      elapsedTime = 0;
      timerDisplay.textContent = formatTime(elapsedTime);
      running = false;
    }
  
    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);
  });
  