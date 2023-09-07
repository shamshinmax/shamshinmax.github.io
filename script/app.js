let tg = window.Telegram.WebApp;
tg.setBackgroundColor("#ffffff")

const message = document.getElementById('TITLE');
const local = document.getElementById('local');
console.log(message.value); // 👉️ ""
message.addEventListener('input', function handleChange(event) {
  console.log(event.target.value);

});
local.addEventListener('input', function handleChange(event) {
    console.log(event.target.value);

  });
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let post = document.getElementById("TITLE").value;
    let local = document.getElementById("local").value;
    let mest = document.getElementById("count").value;
    let time = document.getElementById("startTime").value;

    
    if (mest != '' && local != '' && post != '' && time != '')

        tg.sendData(post+" "+local+" "+mest+" "+time);
});
