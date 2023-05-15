module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
        //Log Bot's username and the amount of servers its in to console
        console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

        //Set the Presence of the bot user
        
        let rakoonprd = true;
        bot.user.setPresence({ activities: [{ name: 'Rakoon Production'}] });
        
        // Alterner la présence toutes les 10 secondes
        setInterval(() => {
          if (rakoonprd) {
            // Changer le nom de l'activité en 'Rakoon test'
            bot.user.setPresence({ activities: [{ name: '*download'}] });
            rakoonprd = false;
          } else {
            // Changer le nom de l'activité en 'Rakoon Production'
            bot.user.setPresence({ activities: [{ name: 'Rakoon Production - *download'}] });
            rakoonprd = true;
          }
        }, 10000);
    }
}
