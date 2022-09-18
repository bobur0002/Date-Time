'use strict'

const hour = document.querySelector('#hour'),
minute = document.querySelector('#minute'),
second= document.querySelector('#second'),
amorpm = document.querySelector('#amorpm')

function timechange(){
    const date = new Date();
    let hours = date.getHours();
    let minutes  = date.getMinutes();
    let seconds = date.getSeconds()

    hour.textContent = hours
    minute.textContent = minutes
    second.textContent = seconds

    if(hour<12 && hour>=0){
        amorpm.textContent='AM'
    }else{
        amorpm.textContent= "PM"
    }

    let output = hour + ':' + minute + ':' +second

   
}


setInterval(timechange, 1000)

