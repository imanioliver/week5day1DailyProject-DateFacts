var moment = require('moment');
moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

const chalk = require('chalk');



console.log("It is " + chalk.blue.bold(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))+ ".");
console.log("It is the " + chalk.magenta.bold(moment().format("DDDo"))+ " day of the year.");
console.log("It is " + (moment("2017-08-14").toNow()) + " into the day.");



if (moment().isDST()){
    console.log("It " + chalk.cyan.bold("is ") + "during Daylight Savings Time");
} else {
    console.log("It " + chalk.red.bold("is not") + " during Daylight Savings Time");
}


if (moment().isLeapYear()){
    console.log("It is a Leap Year");
} else {
    console.log("It " + chalk.redBright.bold("is not") + " a Leap Year.");
}
