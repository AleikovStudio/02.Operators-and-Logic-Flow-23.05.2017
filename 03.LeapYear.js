function leapYear(input) {
    let year = input;
    let answer;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        answer = "yes";
    } else {
        answer = "no";
    }
    console.log(answer);
}

leapYear(1999);

//2nd solution - with ternary operator
function leapYear(year) {

    let leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    console.log(leap ? "yes" : "no");
}

leapYear(2000);


//3rd solution
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
}

console.log(isLeapYear(1999));

//4th solution
function checkY(y) {
    return ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) ? "yes" : "no";
}
console.log(checkY(2000));