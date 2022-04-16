let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");
let save = document.getElementById("save-text-file")

let text = document.getElementById("text");


upper.addEventListener("click", function goUpper() {
    text.value = text.value.toUpperCase()
});

lower.addEventListener("click", function goLower() {
    text.value = text.value.toLowerCase()
});

proper.addEventListener("click", function goProper() {
    let words = text.value.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length)
    }
    text.value = words.join(' ')
});

sentence.addEventListener("click", function goSentence() {
    let sentences = text.value.toLowerCase().split('. ')
    for (let i = 0; i < sentences.length; i++){
        sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1, sentences[i].length)
    }
    text.value = sentences.join('. ')
});

save.addEventListener("click", function download(){
    let filename = "text.txt";
    let element = document.createElement('a');
    let text_to_save = text.value
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text_to_save));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
});
