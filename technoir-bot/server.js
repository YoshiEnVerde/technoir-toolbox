const Eris = require('eris');
const express = require('express');

var winston = require('winston');
var auth = require('./auth.json');
var config = require('./config.json');
var checkRolls = require('./roll.js');
var app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'technoir.log', level: 'debug' }),
    new winston.transports.Console({ colorize: true, level: 'info' })
  ]
});

app.get("/", function(request, response) {
  response.send("beep");
});

// listen for requests :)
var listener = app.listen(config.port, function () {
  logger.info('Technoir Discord Bot (With 6s) is listening on port ' + listener.address().port);
});


const bot = new Eris(auth.token);

bot.on('ready', () => {                                // When the bot is ready
  logger.debug('Bot running!');                             // Log "Ready!"
});

// When a message is created
bot.on('messageCreate', (msg) => {
  try {
    logger.debug('Processing message \'' + JSON.stringify(msg.content) + '\'');
    if(msg.content.match(/^\/roll/)) {
      // If the message content starts with /roll
      var resultMsg = checkRolls.check(msg.content, config.baseDiff, logger);

      bot.createMessage(msg.channel.id, resultMsg);
    } else {
      logger.debug('Message matches no available token');
    }
  } catch (error) {
    logger.error('Execution error: ' + error.message);
    logger.error('Stack Trace: ' + error.stack);
    logger.error('Error details: ' + parse(stringify(error)));
  }
});

// Get the bot to connect to Discord
bot.connect();
