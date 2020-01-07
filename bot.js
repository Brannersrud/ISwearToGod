let Discord = require('discord.io');
let logger = require('winston');
let auth = require('./auth.json');
var Filter = require('bad-words'),
    filter = new Filter();
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if(filter.isProfane(message)){
        bot.sendMessage({
            to: channelID,
            message: 'LANGUAGE!!! :('
        });  
    }else{
    for(let i=0; i < illegalWords.length; i++){
        if(illegalWords[i] === message.toLowerCase()){
            bot.sendMessage({
                to: channelID,
                message: 'LANGUAGE!!! :('
            });
        }
        
    }
}
   
});




let illegalWords = ["faen", "shit", "dritt", "helvete", "suger", "penis", "pikk"]