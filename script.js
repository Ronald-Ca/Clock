const digitalTime = document.querySelector('.digital .time')
const digitalDate = document.querySelector('.digital .date')
const sElement = document.querySelector('.p_s')
const mElement = document.querySelector('.p_m')
const hElement = document.querySelector('.p_h')
const numbersContainer = document.querySelector('.numeros')

for (let i = 1; i <= 12; i += 1) {
    const number = document.createElement('div')
    number.className = 'numero'
    number.textContent = i
    const angle = i * 30 - 90
    number.style.setProperty('--angle', `${angle}deg`)
    numbersContainer.appendChild(number)
}

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long'
})

function updateClock() {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()

    digitalTime.textContent = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
    digitalDate.textContent = dateFormatter.format(now)

    const sDeg = (360 / 60) * second - 90
    const mDeg = (360 / 60) * minute + (6 / 60) * second - 90
    const hDeg = (360 / 12) * hour + (30 / 60) * minute + (30 / 3600) * second - 90

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time
}

setInterval(updateClock, 1000)
updateClock()