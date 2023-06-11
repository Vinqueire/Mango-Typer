function putText(){
    if (document.getElementById("timeSelect").value === 0){
        alert("Thing not selected");
        
    }
    else{
        getTime();
        const texts = ["This is text nr 1 to fill", "This is text nr 2 to fill", "This is text nr 3 to fill"];
        var randomNum = Math.floor(Math.random() * 3)
        document.getElementById("stuffToType").textContent = texts[randomNum];
    }
}

// This asshole shit doesnt work, textarea doesnt work for changing a single letter, figure out how to make this shit work It for sure won't work with textarea
function checkText(){
    const randText = document.getElementById("stuffToType");
    console.log(randText).textContent;
    var inputedText = document.getElementById("myText").value;
    for (var i = 0; i < randText.length; i++){
        temp = randText[i];
        if (randText[i] === inputedText[i])
        document.getElementById("stuffToType")[i].style.backgroundColor = 'blue';
    }
}