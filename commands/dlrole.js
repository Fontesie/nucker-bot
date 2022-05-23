
module.exports.run = async (client, message, args) => {
    const config = require("../config.json");
    if (message.author.id == config.idowner) { } else return;
    message.delete();
    message.guild.roles.cache.forEach(roles => {
        roles.delete()
        .then(deleted => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);
    })


}

module.exports.config = {
    name: "dlrole",
    aliases: ["deleterole"]
}
