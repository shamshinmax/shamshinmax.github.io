let tg = window.Telegram.WebApp;

tg.expand();
tg.sendData("sendTestMessage");
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    tg.MainButton.show();
    
});
