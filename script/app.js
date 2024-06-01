let tg = window.Telegram.WebApp;
tg.setBackgroundColor("#1F3533")

const message = document.getElementById('TITLE');
const local = document.getElementById('local');
function isTextInput(node) {
    return ['INPUT', 'TEXTAREA'].indexOf(node.nodeName) !== -1;
}

document.addEventListener('touchstart', function(e) {
    if (!isTextInput(e.target) && isTextInput(document.activeElement)) {
        document.activeElement.blur();
    }
}, false);
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let post = document.getElementById("TITLE").value;
    let local = document.getElementById("local").value;
    let mest = document.getElementById("count").value;
    let time = document.getElementById("startTime").value;
    let date = document.getElementById("date").value;
    let naz = document.getElementById("naz").value;
    let tel = document.getElementById("tel").value;
    if (mest != '' && local != '' && post != '' && time != '' && date != ''&& naz != '' && tel != ''){
        tg.sendData(post+"^"+local+"^"+mest+"^"+time+"^"+date+"^"+ tel + "^" + naz + "^" + 0);
    }

        
});
