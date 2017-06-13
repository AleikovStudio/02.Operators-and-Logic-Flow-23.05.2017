//IMG blob - ot c#:
// https://forum.tutorials7.com/1156/how-to-calculate-an-area-of-a-triangle-in-c%23-and-visual-basics
//Use Heron's formula:
// https://en.wikipedia.org/wiki/Heron%27s_formula

function triangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    console.log(area);
}

triangleArea(2, 4, 3.5);

//2nd solution

function areaTriangle([a,b,c]) {
    [a,b,c] = [a, b, c].map(Number);//.map is converting all the elements in the array into numbers
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    return area;
}

console.log(areaTriangle(["2", "3.5", "4"]));