const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523828007895564321")
setInterval(function() {
channel.send(`veno veno veno veno veno veno is backk`);
}, 30)
})

client.login(process.env.BOT_TOKEN);