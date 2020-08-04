const TelegramBot = require('node-telegram-bot-api');

class Telegram {
  constructor() {
    this.bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});

    this.setCallbacks();
    this.runListener();
  }

  setCallbacks() {
    const {bot} = this;

    bot.onText(/\/echo (.+)/, (msg, match) => {
      const chatId = msg.chat.id;
      const resp = match[1];

      bot.sendMessage(chatId, resp);
    });
  }

  runListener() {
    const {bot} = this;

    bot.on('message', (msg) => {
      const chatId = msg.chat.id;

      bot.sendMessage(chatId, 'Received your message');
    });
  }

  getFile(id) {
    return this.bot.getFileStream(id);
  }
}

module.exports = new Telegram();



