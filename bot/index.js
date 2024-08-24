const TelegramApi = require('node-telegram-bot-api')
token = '7151135279:AAFIVcWVcfhSxHhMFZHAnJriVvN14WS99xo'

const bot = new TelegramApi(token, {polling: true})
const url = 'https://www.ya.ru'

bot.on('message', async msg =>{
    const chatId = msg.chat.id;
    const username = msg.from.username;
    const text = msg.text;
    const language = msg.from.language_code;
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(msg.date*1000).toLocaleString(language, options)
    const welcomeMsgRu = 'Добро пожаловать в бот астральной поддержки';
    const welcomeMsgEng = 'Welcome to the astral support bot';
    const localWelcomMsg = language === 'ru' ? welcomeMsgRu : welcomeMsgEng;
    const btnMsgRu = 'Гороскоп на';
    const btnMsgEng = 'Horoscope for';
    const localButtonMsg = language === 'ru' ? btnMsgRu : btnMsgEng;

    if (text === '/start') {
        return bot.sendMessage(chatId, `${localWelcomMsg} ${username}`, {
            reply_markup: {
                inline_keyboard: [
                    [{text: `${localButtonMsg} ${date}`, web_app: {url}}]
                ]
            }
        })
    }
})
