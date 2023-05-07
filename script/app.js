let tg = window.Telegram.WebApp;
tg.setBackgroundColor("#ffffff")

var timing = document.getElementById("now")


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
const times = document.getElementById("startTime");
times.value = datas()
timing.innerHTML = '(от '+datas()+ ' до ' + '23:59)';
var time = times.value;
times.addEventListener("input", () => {
   if (times.value < datas()){
      time = 0
   }
   else {
      time = times.value;
   }
   
   
}, false);
btn.addEventListener("click", function(){
    if (time != 0){
          var place = document.getElementById("selection").value;
          console.log(datas())
          tg.sendData('1'+datas()+" "+place+" "+tg.colorScheme);
    }

    
});


btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    tg.sendData('1'+time+" "+place+" "+tg.colorScheme);
});
