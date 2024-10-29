const TelegramBot = require('node-telegram-bot-api')

const appUrl = 'https://192.168.137.1:443/'

const token = '8177905046:AAFUZyQGfhRWmnX9xB4eashqPjQPBPlZY7A'

const bot = new TelegramBot(token, { polling: true })

bot.on('message', async msg => {
	const chatId = msg.chat.id
	const text = msg.text
	if (text === '/start') {
		await bot.sendMessage(
			chatId,
			`Grab your coffee now! ☕️`, {reply_markup: {
	inline_keyboard: [[{ text: 'Order coffee', web_app: {url: appUrl}}]],
}}
		)
	}
})