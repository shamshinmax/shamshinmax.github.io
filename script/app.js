

let btn = document.getElementById("btn");
const times = document.getElementById("startTime");


console.log("hi");

times.addEventListener("input", () => {
    time = startTime.value;
}, false);



btn.addEventListener("click", function(){
    var place = document.getElementById("selection").value;
    console.log(time+" "+place);
});
