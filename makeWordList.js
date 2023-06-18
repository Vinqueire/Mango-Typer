function makeList() {
    const wordList = [
      "nie", "tak", "w", "kiedy", "potem", "teraz", "schody", "kamienie", "parapet", "jedzenie", "talerz", "miska", "pies", "kot", "tablica", "telewizor",
      "klawiatura", "telefon", "prysznic", "mikrofon", "okno", "wiatrak", "drzwi", "klamka", "naszyjnik", "przycisk", "zawias", "korek", "auto", "mikroskop",
      "nigdy", "chwila", "ostrze", "naklejka", "okulary", "czy", "ty", "ci", "tylko", "jestem", "pan", "pani", "wiem", "wszystko", "ciebie", "dlaczego",
      "chcesz", "przepraszam", "prawda", "zawsze", "nam", "czas", "wiedza", "albo", "prosto", "lepiej", "rzeczy", "twoje", "pewnie", "znaczy", "dzieci",
      "wam", "mojej", "wiele", "dzisiaj", "nad", "mama", "tata", "praca", "woda", "sok", "znowu", "problem", "dom", "mieszkanie", "kolacja", "obiad"
    ];
  
    var length = 0;
    var time = document.getElementById("timeSelect");
    var timeToSwitch = time.value;
    console.log(timeToSwitch);
    switch(timeToSwitch){
      case "10":
        length = 75;
        break;
      case "20":
        length = 90;
        break;
      case "30": 
        length = 100;
        break;
      case "60":
        length = 200;
        break;
      case "300":
        length = 800;
        break;
    }

    const sentence = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        const randomWord = wordList[randomIndex];
        sentence.push(randomWord);
    }
    return sentence.join(" ");
}