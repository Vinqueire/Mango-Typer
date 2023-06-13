function startTest() {
    document.getElementById("countdown").setAttribute("hidden", "true");
    const timeSelect = document.getElementById("timeSelect");
    if (timeSelect.value === "0") {
    alert("No time has been selected");
    } else {
    const timeValue = parseInt(timeSelect.value, 10);
    const challengeText = makeList();
    document.getElementById("challengeText").textContent = challengeText;
    document.getElementById("userInput").focus();
    printTime(timeValue);
    document.getElementById("challengeText").style.border = "thick solid #000000";
    document.getElementById("challengeText").style.borderRadius = "10px";
    document.getElementById("userInput").removeAttribute("hidden");
    document.getElementById("timeLeft").removeAttribute("hidden");
    document.getElementById("userInput").focus();
    var timeout = timeSelect.value * 1100;
    setTimeout(calculateWpm, timeout);
    }
}