const config = require("../config.json");

exports.run = (client, message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    let messageArray = message.content.split(" "),
        command = messageArray[0],
        args = messageArray.slice(1),
        commandfile = client.commands.get(command.slice(config.prefix.length)) || client.aliases.get(command.slice(config.prefix.length));
        commandwithoutprefix = command.replace(config.prefix, "")

    if (!commandfile) return;
    console.log(`[${message.author.tag}] (${message.author.id}) has used the '${command.replace(config.prefix, "")}' command.`);
    commandfile.run(client, message, args);
};