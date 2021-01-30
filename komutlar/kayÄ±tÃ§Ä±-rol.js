const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let yetkilirol = message.mentions.roles.first()
  if (!yetkilirol) return message.channel.send('**Kayıt Görevlisi Seçilecek Rolü Etiketler misin?**')
   
  db.set(`yetkilirolk_${message.guild.id}`, yetkilirol.id)
  const embed = new Discord.MessageEmbed()
  .setTitle(`Yetkili Rolü Başarıyla ${yetkilirol.name} olarak Ayarlandı!`)
  .setDescription('İşlem Başarılı! | Sweet Bot')
  message.channel.send(embed)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'yetkili-rol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};