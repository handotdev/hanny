const chalk = require('chalk');
const _cliProgress = require('cli-progress');
const qoa = require('qoa');
const {log} = console;

log(chalk.red("  _   _                                     _   ___  "));
log(chalk.red(" | | | | __ _ _ __  _ __  _   _    __   __ / | / _ \\ "));
log(chalk.red(" | |_| |/ _` | '_ \\| '_ \\| | | |   \\ \\ / / | || | | |"));
log(chalk.red(" |  _  | (_| | | | | | | | |_| |    \\ V /  | || |_| |"));
log(chalk.red(" |_| |_|\\__,_|_| |_|_| |_|\\__, |     \\_/   |_(_)___/ "));
log(chalk.red("                          |___/                      "));
log();
log(chalk.bold("Welcome to Hanny, the best npm package about Han Wang."));

const begin = {
    type: 'confirm',
    query: 'Do you want to answer questions about Han?',
    handle: 'type',
    accept: 'y',
    deny: 'n'
  };

const again = {
    type: 'confirm',
    query: 'Want to try again?',
    handle: 'type',
    accept: 'y',
    deny: 'n'
};

const qs = [
    {
        type: 'quiz',
        query: 'What is Han\'s favorite movie?',
        handle: 'a',
        answer: 'Hello Mr. Billionaire (2018)',
        symbol: '>',
        amount: 5,
        choices: [
        'Hello Mr. Billionaire (2018)',
        'Forrest Gump (1994)',
        'The Avengers (2012)',
        'Battle Royale (2000)',
        'Star Wars: Episode VI - Return of the Jedi (1983)'
    ]
    },
    {
        type: 'quiz',
        query: 'What is Han\'s favorite color?',
        handle: 'a',
        answer: 'Red',
        symbol: '>',
        amount: 5,
        choices: [
        'Red',
        'Blue',
        'Green',
        'Orange',
        'Black'
    ]
    },
    {
        type: 'quiz',
        query: 'In what city was Han born?',
        handle: 'a',
        answer: 'Xinxiang',
        symbol: '>',
        amount: 6,
        choices: [
        'Xinxiang',
        'Zhengzhou',
        'Guangzhou',
        'Beijing',
        'Shanghai',
        'Vancouver'
    ]
    },
    {
        type: 'quiz',
        query: 'Which of the following countries has Han visited?',
        handle: 'a',
        answer: 'Mexico',
        symbol: '>',
        amount: 5,
        choices: [
        'Mexico',
        'Thailand',
        'Singapore',
        'United Kingdom',
        'Samoa'
    ]
    },
    {
        type: 'quiz',
        query: 'Han once had to get stiches from playing which following sport?',
        handle: 'a',
        answer: 'Badminton',
        symbol: '>',
        amount: 5,
        choices: [
        'Badminton',
        'Golf',
        'Hockey',
        'Snowboarding',
        'Soccer'
    ]
    },
    {
        type: 'quiz',
        query: 'What is Han\'s favorite sport?',
        handle: 'a',
        answer: 'Hockey',
        symbol: '>',
        amount: 5,
        choices: [
        'Hockey',
        'Golf',
        'Soccer',
        'Basketball',
        'Cricket'
    ]
    },
    {
        type: 'quiz',
        query: 'What genre of music does Han listen to when he\'s programming?',
        handle: 'a',
        answer: 'EDM',
        symbol: '>',
        amount: 5,
        choices: [
        'EDM',
        'Classical',
        'Pop',
        'Metal',
        'Jazz'
    ]
    },
    {
        type: 'quiz',
        query: 'What is Han\'s zodiac sign?',
        handle: 'a',
        answer: 'Virgo',
        symbol: '>',
        amount: 5,
        choices: [
        'Virgo',
        'Leo',
        'Cancer',
        'Aries',
        'Pisces'
    ]
    },
    {
        type: 'quiz',
        query: 'What is Han\'s favorite US state?',
        handle: 'a',
        answer: 'California',
        symbol: '>',
        amount: 5,
        choices: [
        'California',
        'Texas',
        'New York',
        'Washington',
        'Nebraska'
    ]
    },
    {
        type: 'quiz',
        query: 'What is Han\'s proudest accomplishment?',
        handle: 'a',
        answer: 'Being on Google Street View',
        symbol: '>',
        amount: 5,
        choices: [
        'Being on Google Street View',
        'Graduating with an IB diploma',
        'Filing and owning a US patent',
        'Getting 500+ connections on LinkedIn',
        'Getting elected as the VP of sponsorships for his school\'s Chinese Culture club'
    ]
    },
    {
        type: 'quiz',
        query: 'What is Han\'s least favorite national holiday?',
        handle: 'a',
        answer: 'Halloween',
        symbol: '>',
        amount: 5,
        choices: [
        'Halloween',
        'New Years',
        'Christmas',
        'Valentine\'s Day',
        'Easter'
    ]
    },
    {
        type: 'quiz',
        query: 'At what grade did Han get schooled in China',
        handle: 'a',
        answer: '3',
        symbol: '>',
        amount: 5,
        choices: [
        '3',
        '2',
        '1',
        '5',
        '4'
    ]
    },
    {
        type: 'input',
        query: '(True or False)\nHan once got a cast from skiing. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nHan uses a different password for every account. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nHan has a bottle of maple syrup in his dorm room right now. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nEven though he has never been there, Han says that his favorite country is France. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nHan pronounces southern south-ern. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nHan read the 50-shades trilogy when he was 14. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nHan worked as a Starbucks barista in his senior year of high school. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nHan once competed in a gymnastics competition at Tsinghua University. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nHan once blacked out at a party in Toronto. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nHan interviewed for a job at the Canadian Security Intelligence Service. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nWhile Han loves politics, he has never actually voted. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nHan can name the capital of every country. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nHan has watched Friends back to back three times. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: '(True or False)\nHan\'s favorite TV series is House of Cards. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nHan was once suspended in middle school for slapping another kid. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nHan\'s phone is in french. [t/f]',
        handle: 'a',
        answer: 't'
    },
    {
        type: 'input',
        query: '(True or False)\nHan\'s once jumped in a pool while wearing yeezys. [t/f]',
        handle: 'a',
        answer: 'f'
    },
    {
        type: 'input',
        query: 'What day of the month is Han\'s birthday?',
        handle: 'a',
        answer: '30'
    },
    {
        type: 'input',
        query: 'How many continents have Han been to?',
        handle: 'a',
        answer: '2'
    },
    {
        type: 'input',
        query: 'How many siblings does Han have?',
        handle: 'a',
        answer: '0'
    }
];
  
(async function() {
    let conf = qoa.prompt([begin]);
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
        let rand = Math.floor(Math.random() * qs.length);

        if (!used.includes(rand)) {
            log(chalk.whiteBright.bgRed(`  Question ${i}/7:  `));
            let question = qoa.prompt([qs[rand]]);
            let answer = await question;

            if (qs[rand].type === 'input') {
                if (qs[rand].answer === answer.a) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                    log(chalk.red('Wrong'));
                    let longate = {t:'true', f:'false'};
                    if (longate[qs[rand].answer]) {
                        log(chalk.gray(`The correct answer is ${longate[qs[rand].answer]}`));
                    } else {
                        log(chalk.gray(`The correct answer is ${qs[rand].answer}`));
                    }
                }
            } else if (qs[rand].type === 'quiz') {
                if (answer.a.isCorrect) {
                    log(chalk.green('Correct'));
                    score++;
                } else {
                    log(chalk.red('Wrong'));
                    log(chalk.gray(`The correct answer is ${qs[rand].answer}`));
                }
            }
            log('\n')

            used.push(rand);

        } else {
            i--;
        }

    }
    log(chalk.whiteBright.bgRed.bold(`  You got ${score} correct  `));
    let another = qoa.prompt([again]);
    let res = await another;

    if (res.type) {
        round();
    }
}