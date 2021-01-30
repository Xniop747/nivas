const Discord = require('discord.js');
const moment = require('moment');
const useful = require('useful-tools');
const ayarlar = require('../config.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {
	const tarih = useful.tarih(message.guild.createdTimestamp)
	let drest = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop")).size
let web = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("web")).size
let mobil = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile")).size
	
let DarkCode = new Discord.MessageEmbed()
.setFooter(`${message.author.username} Tarafından İstendi.`)
.setTimestamp()
.addField(" **Sunucu Bilgileri**", ` **Sunucu Adı:** **${message.guild.name}** \n  Sunucu Sahibi: **${message.guild.owner}** \n  Sunucu ID: **${message.guild.id}**`)
.addField("  **Kullanıcı Bilgileri** ",`  **Online Üye Sayısı:** **${message.guild.members.cache.filter(x => x.user.presence.status === 'online').size}** \nRahatsız Etmeyin Üye Sayısı: **${message.guild.members.cache.filter(x => x.user.presence.status === 'dnd').size}** \n  Boşta Üye Sayısı: **${message.guild.members.cache.filter(x => x.user.presence.status === 'idle').size}**  \n Çevrimdışı Üye Sayısı: **${message.guild.members.cache.filter(x => x.user.presence.status === 'offline').size}** \n  Bot Sayısı: **${message.guild.members.cache.filter(m => m.user.bot).size}**`)
.addField("  **Diğer Bilgiler**", ` **Emoji Sayısı:** **${message.guild.emojis.cache.size}** \n  Sunucu Bölgesi: **${message.guild.region}** \n  Oluşturulma Tarihi: **${tarih}**`)
.addField("  **Boost seviyeleri**", `**Boost Seviyesi:** **${message.guild.premiumTier}** \n Boost Sayısı: **${message.guild.premiumSubscriptionCount}**`)
.addField(`  **Üyelerin Bağlandığı Cihazlar:**`, `**${drest}** Kişi **Bilgisayardan**\n**${web}** Kişi **Webden**\n**${mobil}** Kişi İse **Mobilden** Bağlanıyor!`, true)
.setColor("#964b00")
message.channel.send(DarkCode)
message.react("725652816764469269");
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sb'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sunucu-bilgi',
  description: 'Komut Taslak',
  usage: 'Komut Taslak'
};