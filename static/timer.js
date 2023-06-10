function getTime()
{
    const time = document.getElementById("timeSelect");
    var timeValue = time.value;
   
    printTime(timeValue);
}
    
function printTime(timeVal)
{
    if (timeVal >= 0)
    {
        document.getElementById("temp").textContent = timeVal;
        setTimeout(printTime, 1000, --timeVal)
    }
}

