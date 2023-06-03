const { Telegraf } = require('telegraf');
const bot = new Telegraf('6069078370:AAHaCxL-lXOlI1SDPcQY-ifLmYFTqo40spw');

const hatake = [
    'я заблудился на дороге, под названием жизнь',
    'шиноби не соблюдающие законы-мусор, но шиноби бросающие своих друзей хуже мусора',
    'yaa chkoky chkoky',
    'если ты выделяешься то это не значит то это хорошо, иначе говоря, торчащий гвоздь забьют первым',
    'YO!',
    'а ты знаешь что означает 106?',
];

let currentHatake = hatake[0];
bot.start((ctx) => {
    ctx.reply('YO! я шиноби который могу сказать пару предложений, вот мои команды:\n\n' +
    '/hatake - сказать фразу\n' +
    '/change - поменять фразу');
});

bot.command('hatake', (ctx) => {
    ctx.reply(currentHatake);
});

bot.command('change', (ctx) => {
    const randomIndex = Math.floor(Math.random() * hatake.length);
    currentHatake = hatake[randomIndex];
    ctx.reply('новая фраза: '+currentHatake);
});

bot.launch();
