function putText(){
    if (document.getElementById("timeSelect").value === 0)
        alert("No time has been selected");
    else
        getTime();
}


function checkText(){
    var randText = document.getElementById("stuffToType").innerHTML;
    var inputedText = document.getElementById("myText").value;
    
    // This needs a rework, It's suppoused to make the ui background colour green/red on inputed text
} 