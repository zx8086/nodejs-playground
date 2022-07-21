const fs = require('fs');
const moment = require('moment');

const time = new Date();
const parsedTime = moment(time).format('YYYY-MM-DD HH:mm:ss');

// const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');

fs.writeFileSync('file.txt', 'Hello World!');
fs.appendFileSync('file.txt', '\nMy name is Simon');

console.log("Hello World!");
console.log(parsedTime);

