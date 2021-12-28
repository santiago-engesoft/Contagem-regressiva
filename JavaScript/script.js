const secondsContainer = document.querySelector('#secods')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours') 
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear


const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60
    
    secondsContainer.textContent = seconds
    minutesContainer.textContent = minutes
    hoursContainer.textContent = hours
    daysContainer.textContent = days

 /*console.log({days, hours, minutes, seconds})*/
}
/*updateCountdown()*/

setTimeout(() => {
    spinnerLoading.remove()
    countdownContainer.style.display ='flex'
}, 1000)
setInterval(updateCountdown, 1000)
