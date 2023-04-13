let tg = window.Telegram.WebApp;
tg.expand();
btn.addEventListener("click", function(){
    tg.sendData("123");
});
