let startbox = document.querySelector('.start-box');
let inputCounter = document.querySelector('#input-counter');
let startCounter = document.querySelector('#start-counter');
let ErrorElement = document.querySelector('#error-message');
let TimeCircle = document.querySelector('.c100');
let TimerNum = document.querySelector('.c100 > span');



startCounter.addEventListener('click', function (e) {
    let seconds = parseInt(inputCounter.value)
    if (isNaN(seconds)) {
        ErrorElement.textContent = 'زمان را به درستی وارد کنید.';
        ErrorElement.classList.add('active')

        return;
    }

    startbox.style.display = 'none';
    ErrorElement.classList.remove('active');
    TimeCircle.style.display = 'block';
    TimerNum.textContent = seconds;


    setInterval(() => {
        seconds -= 1;

        TimerNum.textContent = seconds;
    },1000);
})

