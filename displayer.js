// Create span for each
// This is very bad code :c
var length = 0;
var clr1 = "rgb(20, 184, 55)";
var clr2 = "rgb(201, 45, 17)";
var tempContainer;

function displayText(challengeText) {
    let container = document.getElementById("challengeText");
    container.innerHTML = "";

    for (let i = 0; i < challengeText.length; i++) {
      let span = document.createElement("span");
      span.textContent = challengeText[i];
  
      container.appendChild(span);
    }

    color = document.getElementById("color").value;
    console.log(color);
    switch(color){
      case "1":
        clr1 = "rgb(20, 184, 55)";
        clr2 = "red";
        break;
      case "2":
        clr1 = "rgb(24, 164, 199)";
        clr2 = "orange";
        break;
      case "3":
        clr1 = "rgb(164, 17, 201)";
        clr2 = "rgb(20, 184, 55)";
        break;
    }  
    tempContainer = document.querySelectorAll("#challengeText span");
  }
  
document.getElementById("userInput").addEventListener("input", function () {
  const challengeText = document.getElementById("challengeText").textContent;
  const userInput = document.getElementById("userInput").value;
  const userInputLength = userInput.length;
  length ++;

  for (let i = 0; i < userInputLength; i++) {
    if (i < length) {
      if (userInput[i] === challengeText[i]) 
        tempContainer[i].style.backgroundColor = clr1;
      else
        tempContainer[i].style.backgroundColor = clr2;
    }
    if (userInputLength < length){
      tempContainer[length - 2].style.backgroundColor = "transparent";
      length = userInputLength;  
    }
  }
});