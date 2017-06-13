// use this formula:
// http://www.calculatorsoup.com/calculators/geometry-solids/cone.php

function cone(input) {
    let [r,h]=input.map(Number);
    let s = Math.sqrt(r * r + h * h);
    let volume = Math.PI * r * r * h / 3;
    console.log("volume = " + volume);
    let area = Math.PI * r * (r + s);
    console.log("area = " + area);
}

cone(["3.3", "7.8"]);

//2nd solution

function coneTask(a, b) {
    let s = Math.sqrt(a * a + b * b);
    let volume = Math.PI * a * a * b / 3;
    console.log("volume = " + volume);
    let area = Math.PI * a * (a + s);
    console.log("area = " + area);
}

coneTask(3, 5);