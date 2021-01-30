const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "730501462580265030") return message.reply('**:no_entry: Sadece Sahibim Kullanabilir!**');
   message.channel.send('**𝕱𝖚𝖗𝖐𝖆𝖓𝕬𝖊𝖕 Dediğin Sunucudan Ayrıldım Bebeğim!**');
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'ayrıl'
};