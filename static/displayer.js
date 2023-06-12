function displayText(challengeText) {
    let challengeTextContainer = document.getElementById("challengeText");
    challengeTextContainer.innerHTML = "";
  
    for (let i = 0; i < challengeText.length; i++) {
      let span = document.createElement("span");
      span.textContent = challengeText[i];
  
      challengeTextContainer.appendChild(span);
    }
  }
  
  document.getElementById("userInput").addEventListener("input", function () {
    const challengeText = document.getElementById("challengeText").textContent;
    const userInput = document.getElementById("userInput").value;
    const userInputLength = userInput.length;
  
    let challengeTextContainer = document.getElementById("challengeText");
    challengeTextContainer.innerHTML = "";
  
    for (let i = 0; i < challengeText.length; i++) {
      let span = document.createElement("span");
      span.textContent = challengeText[i];
  
      if (i < userInputLength) {
        if (userInput[i] === challengeText[i]) {
          span.style.backgroundColor = "green";
        } else {
          span.style.backgroundColor = "red";
        }
      }
  
      challengeTextContainer.appendChild(span);
    }
  
    if (userInput === challengeText) {
      // Handle completion of challenge
      alert("Challenge completed!");
    }
  });
  