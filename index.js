const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(Logged in as ${client.user.tag}!);
});

client.on('message', meg => {
    if (meg.content === 'ping') {
        meg.reply('Pong!');
    }
});

client.login('!');
