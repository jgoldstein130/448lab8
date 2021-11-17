let borderRed = 0;
let borderGreen = 0;
let borderBlue = 0;
let borderWidth = 0;

let bcGreen = 0;
let bcBlue = 0;
let bcRed = 0;

function update(){
    borderRed = document.getElementById("borderRed").value;
    borderGreen = document.getElementById("borderGreen").value;
    borderBlue = document.getElementById("borderBlue").value;
    borderWidth = document.getElementById("borderWidth").value;

    bcRed = document.getElementById("bcRed").value;
    bcGreen = document.getElementById("bcGreen").value;
    bcBlue = document.getElementById("bcBlue").value;

    document.getElementById("text").style.backgroundColor = 'rgb(' + [bcRed,bcGreen,bcBlue].join(',') + ')';
    borderCol = 'rgb(' + [borderRed,borderGreen,borderBlue].join(',') + ')';
    document.getElementById("text").style.borderColor = borderCol;
    document.getElementById("text").style.borderWidth = borderWidth;
}
