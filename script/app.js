let tg = window.Telegram.WebApp;
var time = 0;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");
tg.ThemeParams.secondary_bg_color = "#FFFFFF";
times.addEventListener("input", () => {
    time = times.value;
}, false);

btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.sendData(time+" "+place);
});
