let plusBtn = document.getElementById('btn-plus');
let minusBtn = document.getElementById('btn-minus');
let resetBtn = document.getElementById('reset-btn');
let display = document.querySelector('.display');
let count = 0;

plusBtn.onclick = function(){
    count++;
    display.textContent = count;
}

minusBtn.onclick = function(){
    count--;
    display.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    display.textContent = count;
}


