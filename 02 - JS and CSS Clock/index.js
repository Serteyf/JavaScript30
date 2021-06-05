const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90; // get percentage of seconds, multiply it by 360(degrees) and add 90 because of the offset in css
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds/60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    
    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((minutes/60) * 6) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    

}


setInterval(setDate, 1000);
