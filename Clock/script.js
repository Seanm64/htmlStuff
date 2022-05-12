setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const analogClock = document.querySelector('[bottom-clock-id]')

function setClock()
{
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio =(minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    setAnalog()
}

function setAnalog()
{
    const currentDate = new Date()
    let h = currentDate.getHours()
    let m = currentDate.getMinutes()
    let s = currentDate.getSeconds()

    h = checkHour(h)
    m = checkTime(m)
    s = checkTime(s)

    analogClock.innerText = h + ":" + m + ":" + s;
}


function checkHour(h)
{
    return (h > 12) ? h - 12 : h
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
  }

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()