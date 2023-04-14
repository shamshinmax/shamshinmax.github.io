let tg = window.Telegram.WebApp;
var time = 0;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");
times.addEventListener("input", () => {
    time = times.value;
}, false);
if (tg.colorScheme = "dark") {
    tg.setBackgroundColor("#001a26");
 if (tg.colorScheme = "light"){
    tg.setBackgroundColor("#FFFFFF");
}
btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.sendData(time+" "+place+" "+tg.colorScheme);
});
