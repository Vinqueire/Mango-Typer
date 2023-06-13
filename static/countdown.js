function countdown(timeVal)
{
    document.getElementById("countdown").removeAttribute("hidden");
    if (timeVal == 0)
        startTest();
    else 
    {
        document.getElementById("countdownTime").textContent = timeVal;
        setTimeout(countdown, 1000, --timeVal);
    }
}