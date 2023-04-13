let tg = window.Telegram.WebApp;
tg.expand();
var time = 0;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");


console.log("hi");

times.addEventListener("input", () => {
    time = startTime.value;
}, false);

btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.MainButton.show();
   
    tg.sendData(time+" "+place);
});
