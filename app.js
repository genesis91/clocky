function clock(){
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
    
    if (hours < 10){
        hours = "0" + hours
    }
    if (minutes < 10){
        hours = "0" + minutes
    }
    if (seconds < 10){
        hours = "0" + seconds
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('min').innerHTML = ":" + minutes;
    document.getElementById('sec').innerHTML = ":" + seconds;
}
setInterval(clock, 100);