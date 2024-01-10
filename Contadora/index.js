// Counter program

const decreaseBtn = document.getElementById("decreaseBtn").onclick = decrease;

const resetBtn = document.getElementById("resetBtn").onclick = reset;

const increaseBtn = document.getElementById("increaseBtn").onclick = increase;

const counter = document.getElementById("countLabel");
let count = 0;

function increase(){
    count ++;
    counter.textContent = count;
};

function reset(){
    count = 0;
    counter.textContent = count;
};

function decrease(){
    count --;
    counter.textContent = count;
};
