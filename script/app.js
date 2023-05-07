let tg = window.Telegram.WebApp;
tg.setBackgroundColor("#ffffff")


const timeControl = document.querySelector('input[type="time"]');
function datas(){
  const date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   if (date.getMinutes() < 10){
      minutes = "0" + date.getMinutes();
   }
   if (date.getHours() < 10){
      hours = "0" + date.getHours();
   }
   var time = hours + ":" + minutes
   return time
}
const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
if (date.getMinutes() < 10){
   minutes = "0" + date.getMinutes();
}
if (date.getHours() < 10){
   hours = "0" + date.getHours();
}
var time = hours + ":" + minutes
timeControl.value = hours + ":" + minutes;
let btn = document.getElementById("btn");
const times = document.getElementById("startTime");
times.addEventListener("input", () => {
    time = times.value;
}, false);


btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.sendData('1'+time+" "+place+" "+tg.colorScheme);
});
