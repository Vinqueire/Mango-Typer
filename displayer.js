// Create span for each
// This is very bad code :c
var clr1 = "rgb(20, 184, 55)";
var clr2 = "rgb(201, 45, 17)";
var spanContainer = [];

function displayText(challengeText) {
    let container = document.getElementById("challengeText");
    container.innerHTML = "";

    for (let i = 0; i < challengeText.length; i++) {
      let span = document.createElement("span");
      span.textContent = challengeText[i];
  
      container.appendChild(span);
      spanContainer.push(span);
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
  }
  
document.getElementById("userInput").addEventListener("input", function () {
  const challengeText = document.getElementById("challengeText").textContent;
  const userInput = document.getElementById("userInput").value;
  const userInputLength = userInput.length;

  let container = document.getElementById("challengeText");
  container.innerHTML = "";

  for (let i = 0; i < challengeText.length; i++) {
    let span = document.createElement("span");
    span.textContent = challengeText[i];

    if (i < userInputLength) {
      if (userInput[i] === challengeText[i]) {
        span.style.backgroundColor = clr1;
      } else 
        span.style.backgroundColor = clr2;
    }

    container.appendChild(span);
  }
});
  