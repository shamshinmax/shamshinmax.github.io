let tg = window.Telegram.WebApp;
let teg = Telegram.WebApp.themeParams
var time = 0;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");
times.addEventListener("input", () => {
    time = times.value;
}, false);
if (tg.colorScheme == "dark"){
    teg.bg_color = "dark"
}
if (tg.colorScheme == "light"){
    tg.setBackgroundColor("#FFFFFF");
}

btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.sendData(time+" "+place+" "+tg.colorScheme);
});
