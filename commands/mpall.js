module.exports.run = async (client, message, args) => {
    const config = require("../config.json");
    if (message.author.id == config.idowner) { } else return;
    message.delete();

    const members = message.channel.guild.members.cache;
    if (config.mpallmessage === "") 
    {
        message.author.send("```yaml\nEnter your message in ./config.json\n```")
        return;
    }

    members.forEach(member => {
        if (member.user.bot) return;
        member.send(config.mpallmessage).catch()
        console.log(member.user.username)
    })
  }


module.exports.config = {
    name: "mpall",
    aliases: ["messageall"]
}
