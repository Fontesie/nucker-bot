const { Intents } = require("discord.js");
const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.event = new Discord.Collection();
client.login(config.token).then(r => console.log("Logged on "+client.user.tag+"\n\nOwnner ID: "+config.idowner+"\nPrefix:"+config.prefix+""));



fs.readdir("./commands/", (err, files) => {
    if(err) return console.log(err);
    files.forEach(file => {
        if(!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        client.commands.set(props.config.name, props);
        props.config.aliases.forEach(alias => {
            client.commands.set(alias, props);
        });
    });
});

fs.readdir("./events/", (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        client.event.set(eventName, event);
        client.on(eventName, (...args) => event.run(client, ...args));
    });
});