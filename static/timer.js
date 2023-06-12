function startTimer(duration) {
    let timer = duration;
    let minutes, seconds;
  
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      document.getElementById("timer").textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        clearInterval(timer);
        // Handle time up
        alert("Time's up!");
      }
    }, 1000);
  }