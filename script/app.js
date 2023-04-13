let tg = window.Telegram.WebApp;
var time = 0;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");

times.addEventListener("input", () => {
    time = times.value;
    console.log(time)
}, false);

btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    console.log(time+" "+place);
    tg.answerWebAppQuery("123")
    tg.sendData(time+" "+place);
});
