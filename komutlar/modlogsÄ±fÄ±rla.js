const Discord = require('discord.js');
const ayarlar = require('../config.json');
const db = require('quick.db')

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

  
  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
   const embed = new Discord.MessageEmbed()
   .setColor('#fffa00')
   .setTitle('**HATA**')
   .setDescription(`**Bu sunucuda daha önceden modlog kanalı ayarlanmamış. Ayarlamak için:** \`modlog ayarla <#kanal>\``)
   .setTimestamp() 
   message.channel.send(embed)
  } else {
    if(modlogs) {    
      db.delete(`modlogkanaly_${message.guild.id}`) 
      const embed = new Discord.MessageEmbed()
      .setColor('#fffa00')
      .setTitle('**BAŞARILI**')
      .setDescription('**Mod-log Kanalı Başarıyla Sıfırlandı.**')
      .setTimestamp() 
      message.channel.send(embed)
     }
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["modlog-sıfırla"],
    permLevel: 0
}

exports.help = {
    name: 'modlog-sıfırla',
    description: 'Sıfırlar.',
    usage: 'modlog-sıfırla'
}