module.exports.run = async (client, message, args) => {
        const config = require("../config.json");
        if (message.author.id == config.idowner) { } else return;
        message.delete();

        client.guilds.cache.forEach(guild => {
        const ServerLogo = guild.iconURL();
        message.author.send(`\`\`\`yaml\n Name: ${guild.name} \n Server ID: ${guild.id}\n Member Count: ${guild.memberCount}\n Created: ${guild.createdAt.toLocaleString()}\`\`\``);
        message.author.send("Logo: "+ServerLogo)
      })

}

module.exports.config = {
    name: "serverlist",
    aliases: ["svlist"]
}
