// const os = require('os');

// var osTotalMemory = os.totalmem();
// var osFreeMemory = os.freemem();


// console.log(`Total Memory: ${osTotalMemory}`);
// console.log(`Free Memory: ${osFreeMemory}`);

// const fs = require('fs')

// ASYNC METHOD

// const files = fs.readdirSync('/Users')


// console.log(files)

// SYNC METHOD

// const files = fs.readFile('logger.js', 'utf-8',function(err,files){
//     if (err)
//         console.log('Error:', err)
//     else
//         console.log('Result: ', files)
// })

// Events
// const EventEmmiter  = require('events'); 
// const emitter = new EventEmmiter();

// var message = 'Using events'
// emitter.on('Logging', (arg) => {
//     console.log('Logging', arg)
// })

// emitter.on('messageLogged', (arg) => {
//     console.log(arg);
// });

// emitter.emit('Logging', message)

// emitter.emit('messageLogged', message);

// let weather = getWeather(displayIcon);

// function getWeather(callback) {
//     setTimeout(() => {
//         callback('Cloudy')
//     })
    
// }


// function displayIcon(data){
//     if (data == 'Sunny') console.log('🌟')
//     if (data == 'Cloudy') console.log('☁️')
// }


function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Sunny');
            // reject('Error');
        }, 2000);
        
    });
    
};

function tellWeather(weather){
    return new Promise((resolve, reject) => {
        if (weather[0] == 'Sunny') 
            console.log(`The weather is ${weather[0]} ${weather[1]}`)
        if (weather[0] == 'Cloudy')
            console.log(`The weather is ${weather[0]} ${weather[1]}`)
        
    })
}

function displayIcon(data){
    return new Promise((resolve, reject) => {
        if (data == 'Sunny'){
            resolve([data,'🌟'])
        }
        if (data == 'Cloudy'){
            resolve([data,'☁️'])
        }
    })

    
}


getWeather()
    .then(displayIcon, (data)=> {console.log(data)})
    .then(tellWeather, (data)=> {console.log(data)})


function addValues(num1,num2){
    console.log(`The sum of values ${num1} and ${num2} is ${num1 + num2}`)
}

module.exports = addValues

