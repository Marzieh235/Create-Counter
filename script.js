let startbox = document.querySelector('.start-box');
let inputCounter = document.querySelector('#input-counter');
let startCounter = document.querySelector('#start-counter');
let ErrorElement = document.querySelector('#error-message');
let TimeCircle = document.querySelector('.c100');
let TimerNum = document.querySelector('.c100 > span');
let LoadingMessage = document.querySelector('.message .loading');
let SuccessMessage = document.querySelector('.message .success');



startCounter.addEventListener('click', function (e) {
    let seconds = parseInt(inputCounter.value)
    if (isNaN(seconds)) {
        ErrorElement.textContent = 'زمان را به درستی وارد کنید.';
        ErrorElement.classList.add('active')

        return;
    }

    startbox.classList.remove('active');
    ErrorElement.classList.remove('active');
    TimeCircle.style.display = 'block';
    TimerNum.textContent = seconds;
    LoadingMessage.style.display = 'block';
    SuccessMessage.style.display = 'none';

    let originalSeconds = seconds;
    let lastpercent = 'p100';
    let timerId = setInterval(() => {
        if (lastpercent) {
            TimeCircle.classList.remove(lastpercent)
        } if (seconds <= 0) {
            clearInterval(timerId)
            startbox.classList.add('active');
            TimeCircle.style.display = 'none';
            LoadingMessage.style.display = 'none';
            SuccessMessage.style.display = 'block';
            inputCounter.value = '';
            return;
        }


        seconds -= 1;
        let percent = Math.abs(Math.floor((((originalSeconds - seconds) / originalSeconds) * 100)-100));
        TimeCircle.classList.add(`p${percent}`);
        lastpercent = `p${percent}`;

        TimerNum.textContent = seconds;
    }, 1000);
})

