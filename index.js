const chalk = require('chalk').default;
const open = require('open');

const link = 'https://youmadeit38921.s13.site';

console.log(chalk.green.bold('\nCongratulations! You found the link:\n'));
console.log(chalk.blue.underline(link));
console.log(chalk.gray('\n(If your terminal supports it, you can Ctrl+Click the link.)\n'));

setTimeout(() => {
    open(link);
}, 2000);
