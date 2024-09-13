// Azonnal ellenőrizzük, hogy a cookie már létezik-e
if (document.cookie.indexOf("cookies_accepted=true") !== -1) {
    document.getElementById("cookie-banner").style.display = "none";
}

// Eseménykezelő az "Elfogadom" gombra
document.getElementById("accept-cookies").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
    document.cookie = "cookies_accepted=true; path=/; max-age=31536000";
});

// Eseménykezelő az "Elutasítom" gombra
document.getElementById("reject-cookies").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
});
