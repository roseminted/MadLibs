
document.getElementById("button").addEventListener("click", buildMadLib);

function buildMadLib() {
    let place1 = document.getElementById("place1").value;
    let noun1 = document.getElementById("noun1").value;
    let verb1 = document.getElementById("verb1").value;
    let noun2 = document.getElementById("noun2").value;
    let pluralNoun = document.getElementById("pluralNoun").value;
    let place2 = document.getElementById("place2").value;
    let verb2 = document.getElementById("verb2").value;

    let story = 'On my birthday, I went to ' + place1 + ' and had a ' + noun1 + ', it was so good i could ' + verb1 + '. Then i went home and opened my gifts, my sister gave me a ' + noun2 + ' and my brother gave me ' + pluralNoun + '. It was so much better than last year, that I had to go to ' + place2 + ' so that I could ' + verb2 + '.'

    document.getElementById("story").innerHTML = story;
}


document.getElementById("resetButton").addEventListener("click", reset);

function reset() {
    document.getElementById("place1").value = "";
    document.getElementById("noun1").value = "";
    document.getElementById("verb1").value = "";
    document.getElementById("noun2").value = "";
    document.getElementById("pluralNoun").value = "";
    document.getElementById("place2").value = "";
    document.getElementById("verb2").value = "";
    // document.getElementById("story").style.visibility = "hidden";
}



