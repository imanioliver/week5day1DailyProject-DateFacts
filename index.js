var moment = require('moment');
moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

const chalk = require('chalk');



console.log("It is " + chalk.blue.bold(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))+ ".");
console.log("It is the " + chalk.magenta.bold(moment().format("DDDo"))+ " day of the year.");



let secondsNow = moment().format('ss');
let minutesNow = moment().format('mm');
let hoursNow = moment().format('k');


console.log(secondsNow + "seconds into the minute");
console.log(minutesNow + "minutes into hour");
console.log(hoursNow +" hours into day");
let secondsInMinutes = (60 * minutesNow);
console.log(secondsInMinutes);
// console.log(secondsInMinutes + "the secondsInMinutes");
let secondsInHours = (3600 * hoursNow);
console.log(secondsInHours);
console.log("It is " + chalk.blue.bold(Number(secondsNow) + Number(secondsInMinutes) + Number(secondsInHours)) + " seconds into the day.");


console.log();

if (moment().isDST()){
    console.log("It " + chalk.cyan.bold("is ") + "during Daylight Savings Time");
} else {
    console.log("It " + chalk.red.bold("is not") + " during Daylight Savings Time");
};


if (moment().isLeapYear()){
    console.log("It is a Leap Year");
} else {
    console.log("It " + chalk.redBright.bold("is not") + " a Leap Year.");
};
