// import { clearInterval, setInterval } from 'worker-timers';
let counting;
let session = 'pomodoro'
let buttons = document.getElementsByTagName('button')
const timeButton = document.getElementById('time-button')
const min = document.getElementById('timer-min');
const sec = document.getElementById('timer-sec');
let audio = new Audio();
audio.src = 'timesup.mp3'

const makeItRun = () => {
    if (timeButton.innerHTML == 'Start') {
        switchButton();
    }
}

const switchButton = () => {
    if (timeButton.innerHTML === 'Start') {
        timeButton.innerHTML = 'Stop';
        document.getElementById('message').innerHTML = "Time to work!";
        counting = setInterval(countDown, 1000);
    } else {
        timeButton.innerHTML = 'Start';
        document.getElementById('message').innerHTML = "Click Start and let's work!";
        clearInterval(counting);
    }
}

const setTime = (mins) => {
    if (timeButton.innerHTML == 'Stop') {
        switchButton();
    }
    min.innerHTML = mins;
    sec.innerHTML = '00';
    switch (mins) {
        case 25:
            session = "pomodoro";
            document.getElementById('container').style.backgroundColor = '#d35400'
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = '#e67e22'
            }
            document.getElementById('time-button').style.borderColor = 'rgba(230, 126, 34,0.456)'
            break;
        case 5:
            session = 'short-break';
            document.getElementById('container').style.backgroundColor = '#16a085'
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = '#1abc9c'
            }
            document.getElementById('time-button').style.borderColor = 'rgba(26, 188, 156,0.456)'
            break;
        case 15:
            session = 'long-break';
            document.getElementById('container').style.backgroundColor = '#2980b9'
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = '#3498db'
                buttons[i].style
            }
            document.getElementById('time-button').style.borderColor = 'rgba(52, 152, 219,0.456)'
            break;
    }
}

const countDown = () => {
    const minStr = min.innerHTML;
    const secStr = sec.innerHTML;
    if (minStr == 0 && secStr == 0) {
        if (session == 'pomodoro') {
            const sessionElement = document.getElementById('session');
            sessionElement.innerHTML = Number(sessionElement.innerHTML) + 1;
            if (sessionElement.innerHTML % 2 == 0) {
                console.log('Here???')
                audio.play();
                setTime(15);
                makeItRun();
                countDown();
                document.getElementById('message').innerHTML = 'Time to rest!'
            } else {
                console.log('Here??')
                audio.play();
                setTime(5);
                makeItRun();
                countDown();
                document.getElementById('message').innerHTML = 'Time to rest!'
            }
        } else if (session == 'short-break' || session == 'long-break') {
            console.log('Here?')
            audio.play();
            setTime(25);
            makeItRun();
            countDown();
            document.getElementById('message').innerHTML = 'Time to Work!'
        }
    } else if (minStr != 0 && secStr == 0) {
        min.innerHTML = min.innerHTML -= 1;
        if (minStr < 10) {
            min.innerHTML = '0' + min.innerHTML;
        }
        sec.innerHTML = 59;
    } else {
        sec.innerHTML = sec.innerHTML -= 1;
        if (secStr < 11) {
            sec.innerHTML = '0' + sec.innerHTML;
        }
    }

}

const reset = () => {
    document.getElementById('session').innerHTML = '0'
    setTime(25);
}

const rewind = () => {
    if (session == 'pomodoro') {
        setTime('25');
    } else if (session == 'short-break') {
        setTime(5);
    } else {
        setTime(15);
    }
}

const forward = () => {
    min.innerHTML = '00'
    sec.innerHTML = '00'
}

document.getElementById('25min').addEventListener('click', () => setTime(25))
document.getElementById('5min').addEventListener('click', () => setTime(5))
document.getElementById('15min').addEventListener('click', () => setTime(15))
document.getElementById('reset').addEventListener('click', reset)
document.getElementById('rewind').addEventListener('click', rewind)
document.getElementById('time-button').addEventListener('click', switchButton)
document.getElementById('skip').addEventListener('click', forward)