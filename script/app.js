
let tg = window.Telegram.WebApp;

var time = 0;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");

tg.expand();

console.log("hi");
startTime.addEventListener("input", () => {
    time = startTime.value;
}, false);

btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.MainButton.setText("ok");
    tg.MainButton.show();
    tg.sendData(time+" "+place);
});
