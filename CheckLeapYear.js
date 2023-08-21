let year = '2022';

function checkLeapYear(year) {
    let leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
checkLeapYear(year);