function countdown(timeVal)
{
    document.getElementById("countdown").removeAttribute("hidden");
    document.getElementById("begin").setAttribute("hidden", "true");
    if (timeVal == 0)
    {
        startTest();
        displayText(document.getElementById("challengeText").textContent);
    }
    else 
    {
    document.getElementById("countdownTime").textContent = timeVal;
    setTimeout(countdown, 1000, --timeVal);
    }
}