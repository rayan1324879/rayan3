const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("597773905112858674")
setInterval(function() {
channel.send(`do not say any thing. iknow .and say gg gg gg gg`);
}, 30)
})

client.login(process.env.BOT_TOKEN);