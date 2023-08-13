let circularBar = document.querySelector('.circular-bar');
let Barvalue = document.querySelector('.bar-value');

let startValue = 0;
let endValue = 75;
let speed = 50;


let progress = setInterval(()=>{
    startValue++;
    Barvalue.textContent = `${startValue}%`;
    circularBar.style.background = `conic-gradient( #7d2ae8 ${startValue*3.6}deg, #ededed 0deg)`;
    if(startValue == endValue){
        clearInterval(progress);
    }

} , speed);
