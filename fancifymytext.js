function makeBigger() {
    document.getElementById("text_input").style.fontSize = "24pt";
}

function fancify() {
    const text = document.getElementById("text_input")
    const fancy = document.getElementById("fancy")

    if (fancy.checked) {
        alert("FancyShmancy selected");
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
      } else {
        alert("BoringBetty selected");
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
      }
}

function moo() {
    const textArea = document.getElementById("text_input")
    textArea.value = textArea.value.toUpperCase();
    
    let text = textArea.value;
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");

        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join(". ");
}