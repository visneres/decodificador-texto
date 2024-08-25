var textInput = document.querySelector("#inputText");
var textOutput = document.querySelector("#outputText");

function encryptText() {
    var text = textInput.value;
    var textEncrypted = text.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");

    var output = '<textarea class="output-textarea" readonly id="outputTextEncrypted">' + textEncrypted + '</textarea>' + '<button class="button" id="copyButtonEncrypted" onclick="copyText(\'outputTextEncrypted\')">Copiar</button>';
    document.getElementById("outputText").innerHTML = output;
}
function decryptText() {
    var text = textInput.value;
    var textDecrypted = text.replace(/ufat/g, "u").replace(/ober/g, "o").replace(/imes/g, "i").replace(/enter/g, "e").replace(/ai/g, "a");

    var output = '<textarea class="output-textarea" readonly id="outputTextDecrypted">' + textDecrypted + '</textarea>' + '<button class="button" id="copyButtonDecrypted" onclick="copyText(\'outputTextDecrypted\')">Copiar</button>';
    document.getElementById("outputText").innerHTML = output;
}

function copyText(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("Texto copiado: " + copyText.value);
}