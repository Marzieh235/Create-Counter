let startbox = document.querySelector('.start-box');
let inputCounter = document.querySelector('#input-counter');
let startCounter = document.querySelector('#start-counter');
let TimeCircle = document.querySelector('.c100');
let TimerNum = document.querySelector('.c100 > span');
let lastpercent = 'p100';
let seconds, originalSeconds, timerId

startCounter.addEventListener('click', function (e) {
    seconds = parseInt(inputCounter.value)
    if (isNaN(seconds)) return toggleErrormessage({ show: true, message: 'زمان را به درستی وارد کنید.' });

    toggleErrormessage({ show: false });
    togglestartbox({ show: false });
    toggleloadingmessage({ show: true });
    toggleTimer({ show: true, seconds });

    originalSeconds = seconds;
    timerId = setInterval(startTimer, 1000);
})
let startTimer = () => {
    if (lastpercent) {
        TimeCircle.classList.remove(lastpercent)
    } if (seconds <= 0) {
        clearInterval(timerId)
        togglestartbox({ show: true });
        toggleTimer({ show: false });
        toggleloadingmessage({ show: false });
        return;
    }
    seconds -= 1;
    TimerNum.textContent = seconds;

    let percent = lastpercent = `p${Math.abs(Math.floor((((originalSeconds - seconds) / originalSeconds) * 100) - 100))}`
    TimeCircle.classList.add(percent);
}
let toggleErrormessage = ({ show, message }) => {
    let ErrorElement = document.querySelector('#error-message');
    if (show) {
        ErrorElement.textContent = message;
        ErrorElement.classList.add('active');
    } else {
        ErrorElement.classList.remove('active');
    }
}
let togglestartbox = ({ show }) => {
    if (show) {
        startbox.classList.add('active');
        inputCounter.value = '';
    } else {
        startbox.classList.remove('active');
    }
}
let toggleloadingmessage = ({ show }) => {
    let LoadingMessage = document.querySelector('.message .loading');
    let SuccessMessage = document.querySelector('.message .success');
    if (show) {
        LoadingMessage.style.display = 'block';
        SuccessMessage.style.display = 'none';

    } else {
        LoadingMessage.style.display = 'none';
        SuccessMessage.style.display = 'block';
    }
}
let toggleTimer = ({ show, seconds }) => {
    if (show) {
        TimeCircle.style.display = 'block';
        TimerNum.textContent = seconds;
    } else {
        TimeCircle.style.display = 'none';
    }
}