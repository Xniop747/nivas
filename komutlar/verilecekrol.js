const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let rol = message.mentions.roles.first()
  if (!rol) return message.channel.send('Lütfen verilecek rolü etiketlermisin?')
   
  db.set(`kayıt_${message.guild.id}`, rol.id)
  message.channel.send(`Verilecek Rol Başarıyla Ayarlandı; **${rol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-verilecek-rol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};