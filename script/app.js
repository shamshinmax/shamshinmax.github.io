let tg = window.Telegram.WebApp;
const {
  bg_color,
  text_color,
  hint_color,
  button_color,
  button_text_color,
  secondary_bg_color,
} = Telegram.WebApp.themeParams
var time = 0;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");
times.addEventListener("input", () => {
    time = times.value;
}, false);
if (tg.colorScheme == "dark"){
    bg_color = "dark"
}
if (tg.colorScheme == "light"){
    tg.setBackgroundColor("#FFFFFF");
}

btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.sendData(time+" "+place+" "+tg.colorScheme);
});
