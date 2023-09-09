const date = new Date();

const options = {
    weekday: 'long'
}

const today = date.toLocaleString('en-IN', options);
console.log(today)

document.getElementById('currentDayOfTheWeek').innerHTML = today

    const now = new Date()
    let currTime = now.toISOString();
    
    document.getElementById('currentUTCTime').innerHTML = currTime.split('T').pop();