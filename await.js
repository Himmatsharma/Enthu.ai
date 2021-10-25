const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, 1000)
    })
}


// delayedColor('red', 1000)
// .then(() => delayedColor('pink', 1000))
// .then(() => delayedColor('green', 1000))
// .then(() => delayedColor('yellow', 1000))
// .then(() => delayedColor('pink', 1000))
// .then(() => delayedColor('black', 1000))
// .then(() => delayedColor('brown', 1000))

async function color(g,j,l){

    `hello ${g}`
    await delayedColor('pink', 1000)
    await delayedColor('yellow', 1000)
    await delayedColor('brown', 1000)
    return console.log("done");
}

// color().then((result)=>{
//     console.log(result)
// })


var g = async () => {
    await color();
    console.log('done');
}
console.log('b done');
g();
console.log('a done');



