let tg = window.Telegram.WebApp;
var time = 0;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");

startTime.addEventListener("input", () => {
    time = startTime.value;
}, false);

btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.sendData(time+" "+place);
});
