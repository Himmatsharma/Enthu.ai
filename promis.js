// // THE PROMISE VERSION 
// const fakeRequestPromise = (url) => {

//     return new Promise((resolve, reject) => {

//         const rand = Math.floor(Math.random() * (4500)) + 500;

//         setTimeout(() => {

//             if (rand < 0.7) {

//                 resolve('your data is here');

//             } 

//             reject('error');

//         }, 1000)
//     })
// }

// fakeRequestPromise('hmmmat').then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error);
// })


// var r = new Promise((resolve, reject) => {

//     var p = 10;
//     var j = 5;

//     if(p == j){
//         resolve('Done');
//     }
//     reject('not Done');
// });


// r.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })


// const delayedColor = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, 1000)
//     })
// }

// delayedColor('red', 1000).then(() => {

//     delayedColor('pink', 1000).then(() => {

//         delayedColor('yellow', 1000).then(() => {

//             delayedColor('blue', 1000).then(() => {

//                 delayedColor('green', 1000);
            
//             })

//         })

//     })

// })

// delayedColor('red', 1000)
// .then(() => delayedColor('pink', 1000))
// .then(() => delayedColor('green', 1000))
// .then(() => delayedColor('yellow', 1000))
// .then(() => delayedColor('pink', 1000))
// .then(() => delayedColor('black', 1000))
// .then(() => delayedColor('brown', 1000))

