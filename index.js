const chalk = require("chalk");
const moment = require("moment");

const date = chalk.inverse(`[${moment().format('HH:mm:ss')}]`);


function log(message) {
    console.log(`${date} ${chalk.bgBlue(chalk.black(' 📝 LOG '))} ${message}\n`);
}

function warn(message) {
    console.warn(
      `${date} ${chalk.bgYellowBright(chalk.black(' 🚫 WARN '))} ${chalk.yellowBright(
        message
      )}\n`
    );

}

function error(message) {
    console.error(`${date} ${chalk.bgRed(' ❌ ERROR ')} ${chalk.red(message)}\n`);
}

function debug(message) {
    console.log(
      `${date} ${chalk.bgGreenBright(chalk.black(' ⏺️ DEBUG '))} ${chalk.greenBright(
        message
      )}\n`
    );
}

function info(message) {
    console.info(`${date} ${chalk.bgBlue(chalk.black(' ⓘ INFO '))} ${message}\n`);
}


module.exports = log;
module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;
module.exports.debug = debug;