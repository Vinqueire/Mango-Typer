function calculateWpm(){
    const words = document.getElementById("userInput").value;
    const randWords = document.getElementById("challengeText").textContent;
    var charAmt = 0;

    for (var i = 0; i < words.length; i++)
    {
        if (words[i] == randWords[i])
            charAmt++;
    }

    var amount = charAmt / 5;
    var wpm = 0;
    switch(document.getElementById("timeSelect").value){
        case "10":
           wpm = amount * 6;
           break;
        case "20":
            wpm = amount * 3;
            break;
        case "30":
            wpm = amount * 2;
            break;
        case "60":
            wpm = amount;
            break;
        case "300":
            wpm = amount;
            break;
    }

    document.getElementById("timeLeft").setAttribute("hidden", "true");
    document.getElementById("answerWpm").textContent = Math.round(wpm);
    document.getElementById("answer").removeAttribute("hidden");
}