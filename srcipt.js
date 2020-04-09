'use strict';
const secondsArrow = document.querySelector('.clock-seconds__arrow');
console.log(secondsArrow)
const minutesArrow = document.querySelector('.clock-minutes__arrow');
const hoursArrow = document.querySelector('.clock-hours__arrow');
const date = document.querySelector('.date')
const dateYear = document.querySelector('.date-year');
const dateMonth = document.querySelector('.date-month')
const dateDay = document.querySelector('.date-day')
const timeDigital = document.querySelector('.digital-clock')
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень' , 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
const namesOfDay = ['Неділя', 'Понеділок','Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота' ]
const getActiveTime = () => {
const time = new Date(); 
// const currentDate = () => {

// }
date.textContent = time.getDate();
const second = () => {
    return (secondsArrow.style.transform = `rotate(${time.getSeconds() * 6}deg)`)
}
const minute = () => {
    return (minutesArrow.style.transform = `rotate(${time.getMinutes() * 6}deg)`)
}
const hour = () => {
    return (hoursArrow.style.transform = `rotate(${time.getHours() * 30 + time.getMinutes() * 0.33}deg)`)
}
const yearToday = () => {
  return dateYear.textContent = time.getFullYear();
}

const monthOfTheYear = () => {
    const month = time.getMonth();
    return dateMonth.textContent = namesOfMonth[month];
}
const dayOfTheWeek = () => {
const day = time.getDay();
console.log(day)
 return dateDay.textContent = namesOfDay[day];
}

const digitalClock = () => {
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    second = (second < 10) ? "0" + second : second;
return timeDigital.textContent = (`Поточный час ${hour} : ${minutes} : ${second}`)
}
second();
minute();
hour();
yearToday();
monthOfTheYear()
dayOfTheWeek()
digitalClock();
}
setInterval(getActiveTime, 1000)