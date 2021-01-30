const Discord = require('discord.js');
const ayarlar = require('../config.json');

exports.run = async (client, message, args) => {
if (!message.member.permissions.has("MANAGE_NICKNAMES")) return message.channel.send(`Bu komutu kullanabilmek için \`Kullanıcı Adlarını Yönet\` yetkisine sahip olmalısın.`)

message.guild.members.cache.forEach(plasmic => {
plasmic.setNickname(null)  
 })
  message.channel.send(`**Sunucudaki üyelerin ismi sıfırlandı.**`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['isimleri-sıfırla', 'isimlerisıfırla','isimsıfırla'],
  permLevel: 0
};

exports.help = {
  name: 'isimsıfırla',
  description: 'Sunucudaki her kullanıcının takma adını sıfırlar.',
  usage: 'herkesin-ismini-sıfırla'
};