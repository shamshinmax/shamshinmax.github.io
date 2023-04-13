

let btn = document.getElementById("btn");
const times = document.getElementById("startTime");
var place = document.getElementById("selection").value;


console.log("hi");

startTime.addEventListener("input", () => {
    time = startTime.value;
}, false);


btn.addEventListener("click", function(){
    console.log(time+" "+place);
});
