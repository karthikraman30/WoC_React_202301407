const counter_display = document.getElementById("counter");
const additon = document.getElementById("additon");
const subtraction = document.getElementById("subtraction");
const reset = document.getElementById("reset");

let count = 0 ;

additon.addEventListener("click",()=>{
    count++;
    counter_display.innerText = count;
});

subtraction.addEventListener("click",()=>{
    count--;
    counter_display.innerText = count;
});

reset.addEventListener("click",()=>{
    count = 0;
    counter_display.innerText = count;
});