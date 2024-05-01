const TelegramBot = require("node-telegram-bot-api");

const token = "6296814272:AAH_q_uA8FIjDxHkN86fQ5Oec5Jikb1-III";

const bot = new TelegramBot(token, { polling: true });

bot.on("message",function(msg){
    msg.text= msg.text.toLowerCase();
    if(msg.text == "hi"){
        bot.sendMessage(msg.chat.id,"Hello");
    }else{
        bot.sendMessage(msg.chat.id,"Not Understood");
    }
});