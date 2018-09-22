/* Skriv ut dokumenttiteln */

var start = "Startsida";

if (window.location.href.indexOf('index.html')) {
    document.title = start;
}

console.log("Testar startsidan");