let tg = window.Telegram.WebApp;
tg.setBackgroundColor("#ffffff")
var time = 0;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");
times.addEventListener("input", () => {
    time = times.value;
}, false);


btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.sendData(time+" "+place+" "+tg.colorScheme);
});
