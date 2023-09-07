const body = document.querySelector('body');
console.log(body);

const container = document.createElement('div');
container.classList.add('container');
body.prepend(container);


// let squareCounter  = 0;
// while (squareCounter !== 100) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     container.prepend(square);
//     squareCounter++
// }

// const squares = document.querySelectorAll('.square');
// console.log(squares);
// for (let i = 0; i < squares.length; i++) {
//    setInterval(() => {
    
//    }, interval);( ()=> { 
//    squares[i].style.backgroundColor  = 'blue'
//    console.log(i);

// }, 500)
// }


// let arr = [[0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0],
//            [0,0,0,0,0,0,0,0,0,0]]






const stopwatch = document.createElement('div');
stopwatch.classList.add('stopwatch');
body.prepend(stopwatch);
stopwatch.textContent = '00:00';
 
function startStopwach() {
   let sec = 0
   let min = 0
        function updateTime() {
            sec++;
             sec = parseInt(sec)
             min = parseInt(min)
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        console.log('min: ' + min + 'sec: '  +sec )
        stopwatch.innerHTML = min + ':' + sec;
    } 
    
    interval = setInterval(updateTime, 1000);

}

startStopwach()








// stopwach ()


