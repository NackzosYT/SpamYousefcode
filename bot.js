const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Yousef");
console.log("Spam is online");

client.on('ready', async() => {
var server = "536930893449789440"; 
var channel = "536930893449789442";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Yousef** :leaves:')
    },305);
})

client.on('message',function(message) {
    let prefix = "!&";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`); 
}
});

client.login(process.env.BOT1);
client.login(process.env.BOT2);
client.login(process.env.BOT3);
client.login(process.env.BOT4);
client.login(process.env.BOT5);
client.login(process.env.BOT6);
client.login(process.env.BOT7);
client.login(process.env.BOT8);
client.login(process.env.BOT9);
client.login(process.env.BOT10);
client.login(process.env.BOT11);
client.login(process.env.BOT12);
client.login(process.env.BOT13);
client.login(process.env.BOT14);
client.login(process.env.BOT15);
client.login(process.env.BOT16);
client.login(process.env.BOT17);
client.login(process.env.BOT18);
client.login(process.env.BOT19);
client.login(process.env.BOT20);
client.login(process.env.BOT21);
client.login(process.env.BOT22);
client.login(process.env.BOT23);
client.login(process.env.BOT24);
client.login(process.env.BOT25);
client.login(process.env.BOT26);
client.login(process.env.BOT27);
client.login(process.env.BOT28);
client.login(process.env.BOT29);
client.login(process.env.BOT30);
client.login(process.env.BOT31);
client.login(process.env.BOT32);
client.login(process.env.BOT33);
client.login(process.env.BOT34);
client.login(process.env.BOT35);
client.login(process.env.BOT36);
client.login(process.env.BOT37);
client.login(process.env.BOT38);
client.login(process.env.BOT39);
client.login(process.env.BOT40);
client.login(process.env.BOT41);
client.login(process.env.BOT42);
client.login(process.env.BOT43);
client.login(process.env.BOT44);
client.login(process.env.BOT45);
client.login(process.env.BOT46);
client.login(process.env.BOT47);
client.login(process.env.BOT48);
client.login(process.env.BOT49);
client.login(process.env.BOT50);