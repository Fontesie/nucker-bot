module.exports.run = async (client, message, args) => {
    const config = require("../config.json");
    if (message.author.id == config.idowner) { } else return;
    const { MessageEmbed } = require('discord.js');
    message.delete();
    const exampleEmbed = new MessageEmbed()
    .setColor('#36393F')
    .setTitle('🏓 Ping du bot')
    .setDescription(`${client.ws.ping}ms`)
	.setFooter({ text: 'Devlopper: github.com/Fontesie', iconURL: 'https://cdn.discordapp.com/attachments/968180362817732738/976561358705426532/IMG_3143.png' })
    .setTimestamp();
    message.channel.send({ embeds: [exampleEmbed] }).then(msg => setTimeout(() => msg.delete(), 5000));
}

module.exports.config = {
    name: "ping",
    aliases: ["pong", "latency"]
}
