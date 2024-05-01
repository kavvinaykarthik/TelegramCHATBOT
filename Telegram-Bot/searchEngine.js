const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const bot = new TelegramBot('6296814272:AAH_q_uA8FIjDxHkN86fQ5Oec5Jikb1-III', { polling: true });

// Creating a command handler for '/start' command
bot.onText(/^\/start$/, (msg) => {
  const chatId = msg.chat.id;
  const botName = bot.botUsername;
  const botId = bot.botId;

  const message = `Hello, I am Jarvis45! . I am a chatbot designed to provide information and assist you. How can I help you today?`;

  bot.sendMessage(chatId, message);
});


// Creating a command handler for '/alert' command
bot.onText(/^\/alert$/, (msg) => {
  const chatId = msg.chat.id;
  const message = "To search use '/search' <<query>>";

  bot.sendMessage(chatId, message);
});


// Creating a command handler for '/search' command
bot.onText(/\/search (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const query = match[1];

  try {
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        q: query,
        cx: '228b1ebd0551e44ee',
        key: 'AIzaSyD29bWDPQ0iRDOnSl64JtVqqPkn3xsjerk',
      },
    });

    const results = response.data.items;

    // Sending the search results back to the user
    if (results && results.length > 0) {
      let message = '';
      results.forEach((result) => {
        message += `${result.title}\n${result.link}\n\n`;
      });
      bot.sendMessage(chatId, message);
    } else {
      bot.sendMessage(chatId, 'No results found.');
    }
  } catch (error) {
    console.error('Search Error:', error);
    bot.sendMessage(chatId, 'An error occurred while searching.');
  }
});
