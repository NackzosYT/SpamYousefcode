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

client.login("NTM2OTI0Nzk5MTAwOTExNjM4.Dydx9A.O43yY2YI04rrNf__bSFDLfcUWmI");
client.login("NTM2OTI1MjMwNDQzMjY2MDU4.Dydztg.BYUCW8NYIydruYMwWemvbuKNP90");
client.login("NTM2OTI3NjY0ODQ2NjY3Nzg3.Dyd0kA.jGRcVPCe0UWA2yZs3ABbM6zG9cU");
client.login("NTM2OTI3OTY0MTgxNTYxMzQ1.Dyd1Gw.-QcqOGfByL1mPrwfg7U3d_7SW3E");
client.login("NTM2OTI4NTU4MTAzMTM0MjA4.Dyd1tQ.7YH1sW38_6JilmqObi_VL_vRTik");
client.login("NTM2OTI5MjA5NjcxNzQ1NTU3.Dyd4Hg.-yPKiM8yQDGIXnaDptlS9nQDKmc");
client.login("NTM2OTMxODE3NDMzODU4MDQ4.Dyd4rw.li4bIy1Xs1UlHKmw8E-eHJiazes");
client.login("NTM2OTMyMzc0Nzc3NDMwMDE2.Dyd5cg.W96_uciptqfH_evrSKNVe7uVNv0");
client.login("NTM2OTMzMjM5NjAwODQwNzM3.Dyd6gQ.laAafhLmQl89pLpqKOd-D6zPNRo");
client.login("NTM2OTM0Mzc3NDEwNzg5NDA2.Dyd8Tw.BFSi-aVGu_r0Wg97KOZpJrgoS2c");
client.login("NTM2OTM2Mjk3NDUzODQ2NTU5.Dyd9QQ.c6j7aZ1xQQ8TYcPJ492_6lU3vh0");
client.login("NTM2OTM3MzEzMTcxNjY5MDEy.Dyd95g.g2vCg90Z4yOqymHMajMTEBBjnjA");
client.login("NTM2OTM4MDE5OTA3Njk4Njk5.Dyd-iw.4uuFQUcBcZC1Pq4z7ft7ak30wTE");
client.login("NTM2OTM4NzY3MjQ5MDQ3NTYy.Dyd_JA.P1CZ59mJS2nVACvnWvI8drgriZg");
client.login("NTM2OTM5Mjk4NzMwMjc4OTEz.DyeARQ.klJeBElYw_rL8SVWt_M9k2r8__A");
client.login("NTM2OTQwNTUxMDY1NTY3MjQy.DyeBBw.aQ8sKD0-s4IVOdMgFUqkdxvhpRE");
client.login("NTM2OTQxMzMxMDg4NjcwNzIx.DyeB_Q.fRICTIaEnqvRtp_mdO2LNElLqlI");
client.login("NTM2OTQyMzQxMzgyOTk1OTgz.DyeCpw.ITNpVuEgsbNkfM2p7IHOlMh_DoI");
client.login("NTM2OTQzMDU1NTU1NTI2NzAz.DyeDXQ.E8HlnbG3vAZ7q6yBUpctG3OxN-c");
client.login("NTM2OTQzODM2MDc3NzUyMzMx.DyeEPw.KIjEe_gbLviANTIq8DhWq2EGeU0");
client.login("NTM2OTQ0ODI1MDkwNTcyMjkw.DyeFEw.XT8L6XE_mR0IbwpE5QGA7Ni5ciY");
client.login("NTM2OTQ1NjU5MTU3MTUxNzU0.DyeFsQ.oYcqOqld1Qkr2vH9YBZhMEC6OUc");
client.login("NTM2OTQ2MzE1Nzk2Njc2NjA4.DyeGZA.9JkimzMpN0nv-eh74WaOCF038l0");
client.login("NTM2OTQ3MDcxMDM5NTY5OTMy.DyeHFg.0p9PPny2c1pngNboi9pK2Dk-EHU");
client.login("NTM2OTQ3ODg3MjE3NzA0OTk5.DyeH8w.Ovxzh3EBe1cgfxWnd3Mba27C9xI");
