#!/usr/bin/env node

const chalk = require('chalk');
const _cliProgress = require('cli-progress');
const qoa = require('qoa');
const {log} = console;

const ques = require('../lib/questions')
    
log(chalk.red("  _   _                                     _   ___  "));
log(chalk.red(" | | | | __ _ _ __  _ __  _   _    __   __ / | / _ \\ "));
log(chalk.red(" | |_| |/ _` | '_ \\| '_ \\| | | |   \\ \\ / / | || | | |"));
log(chalk.red(" |  _  | (_| | | | | | | | |_| |    \\ V /  | || |_| |"));
log(chalk.red(" |_| |_|\\__,_|_| |_|_| |_|\\__, |     \\_/   |_(_)___/ "));
log(chalk.red("                          |___/                      "));
log();
log(chalk.bold("Welcome to Hanny, the best npm package about Han Wang."));

(async function() {
    let conf = qoa.prompt([ques.begin]);
    let result = await conf;
    
    if (result.type) {
        round();
    }

})();

async function round() {
    qoa.clearScreen();
    log('\n')
    let used = [];
    let score = 0;

    for (let i = 1; i <= 7; i++) {
        let rand = Math.floor(Math.random() * ques.qs.length);

        if (!used.includes(rand)) {
            log(chalk.whiteBright.bgRed(`  Question ${i}/7:  `));
            let question = qoa.prompt([ques.qs[rand]]);
            let answer = await question;

            if (ques.qs[rand].type === 'input') {
                if (ques.qs[rand].answer === answer.a) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                    log(chalk.red('Wrong'));
                    let longate = {t:'true', f:'false'};
                    if (longate[ques.qs[rand].answer]) {
                        log(chalk.gray(`The correct answer is ${longate[ques.qs[rand].answer]}`));
                    } else {
                        log(chalk.gray(`The correct answer is ${ques.qs[rand].answer}`));
                    }
                }
            } else if (ques.qs[rand].type === 'quiz') {
                if (answer.a.isCorrect) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                    log(chalk.red('Wrong'));
                    log(chalk.gray(`The correct answer is ${ques.qs[rand].answer}`));
                }
            }
            log('\n')

            used.push(rand);

        } else {
            i--;
        }

    }
    log(chalk.whiteBright.bgRed.bold(`  You got ${score} correct  `));
    let another = qoa.prompt([ques.again]);
    let res = await another;

    if (res.type) {
        round();
    }
}