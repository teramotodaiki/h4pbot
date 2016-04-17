var builder = require('botbuilder');
var restify = require('restify');

var bot = new builder.BotConnectorBot({
  appId: '', appSecret: ''
});

bot.add('/', function (session) {
  session.send("I'm h4p bot!");
});

var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
  console.log("%s listening to %s", server.name, server.url);
});
