const TelegramBot = require('node-telegram-bot-api');

const token = '6659761730:AAFvXoDq7A3t8y55XU6kUWD9WovBzdlS05Q';
const webAppUrl = 'https://elaborate-capybara-b3fbe9.netlify.app/';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
	const chatId = msg.chat.id;

	if (msg.text === '/start') {
		await bot.sendMessage(chatId, 'Сайт', {
			reply_markup: {
				inline_keyboard: [
					[
						{
                            text: 'Сайт',
                            web_app: {
                                url: webAppUrl
                            }
                        }
					]
				]
			}
		});
	}
});
