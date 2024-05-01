
# Telegram Bot with Node.js

This is a simple Telegram bot created using Node.js that provides various functionalities such as sending messages, searching the web, and handling commands.

## Prerequisites

- Node.js installed on your system
- A Telegram bot token obtained from the BotFather on Telegram

## Setup

1. Clone this repository to your local machine:

```
git clone <repository_url>
```

2. Install the required dependencies using npm:

```
npm install
```

3. Replace the placeholder Telegram bot token in the code with your actual bot token:

```javascript
const bot = new TelegramBot('<your_bot_token>', { polling: true });
```

4. Run the bot:

```
node index.js
```

## Usage

- Start the bot by sending the `/start` command to initiate a conversation.
- Use the `/alert` command to receive a message guiding you on how to use the search functionality.
- Utilize the `/search <query>` command to search the web for information based on the provided query.

## Dependencies

- [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api): A Telegram Bot API wrapper for Node.js.
- [axios](https://www.npmjs.com/package/axios): A Promise-based HTTP client for making HTTP requests.
