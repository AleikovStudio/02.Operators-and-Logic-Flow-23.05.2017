//IMAGE blob - ot c#:
// https://forum.tutorials7.com/1162/how-to-calculate-the-area-of-a-circle-in-c%23

function circleArea(radius) {
    let area = Math.PI * (radius * radius);
    console.log(area);
    console.log(Math.round(area*100)/100);
}

circleArea(5);

//2nd solution
function circleA(r) {
    console.log(Math.PI * r * r);
    console.log(Math.round(Math.PI * r * r * 100) / 100);
}
circleA(5);

//3rd solution
function cA(rad) {
    let area = Math.PI * rad * rad;
    console.log(area);

    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded);
}

cA(5);