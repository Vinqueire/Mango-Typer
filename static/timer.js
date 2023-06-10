function getTime()
{
    var time = document.getElementById("timeSelect");
    var timeValue = time.value;
   
    printTime(timeValue);
}
    
function printTime(timeVal)
{
    if (timeVal >= 0)
    {
        document.getElementById("temp").textContent = timeVal;
        console.log(timeVal);
        timeVal -= 1;
        setTimeout(printTime, 1000, timeVal)
    }
    else 
        return; 
}

