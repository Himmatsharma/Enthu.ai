// function shout() {

//     console.log('himmat');
// }

// var s = document.querySelector('#ida');

// s.onclick = shout;

//project
// var co = document.querySelector('#changecolor');


function ccolor() {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgbcolor = `rgb(${r},${g},${b})`;
    // document.body.style.backgroundColor = rgbcolor;
    return rgbcolor;

}

// co.addEventListener('mouseover',ccolor);


var value = document.querySelectorAll('button');


function getTagName(){

}

for (let val of value) {
    val.addEventListener('click', callbackfunction);
}

function callbackfunction(val){
    this.style.backgroundColor = ccolor();
    this.style.color = ccolor();

}