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

    var color = document.getElementById("color").value;

    var clr1 = "rgb(20, 184, 55)";
    var clr2 = "rgb(201, 45, 17)";

    if (color == 1)
    {
      clr1 = "rgb(20, 184, 55)";
      clr2 = "red";
    }
    else if (color == 2)
    {
      clr1 = "rgb(24, 164, 199)";
      clr2 = "orange";
    }
    else if (color == 3)
    {
      clr1 = "rgb(164, 17, 201)";
      clr2 = "rgb(20, 184, 55)";
    }
  
    for (let i = 0; i < challengeText.length; i++) {
      let span = document.createElement("span");
      span.textContent = challengeText[i];
  
      if (i < userInputLength) {
        if (userInput[i] === challengeText[i]) {
          span.style.backgroundColor = clr1;
        } else {
          span.style.backgroundColor = clr2;
        }
      }
  
      challengeTextContainer.appendChild(span);
    }
  });
  