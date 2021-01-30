const Discord = require('discord.js');
const ayarlar = require('../config.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setAuthor(`SweeT`)
    .addField(`Yetkili Kayıt Sistemi Kullanımı`,
                
                `**•** **\`s!kayıt-kanal-ayarla #kanal\`**\nÜyelerin Kayıt Olacağı Kanal

                 **•** **\`s!kayıt-log-ayarla #kanal\`**\nÜyeler Kayıt Olunca Bildirim Yollanan Kanal

                 **•** **\`s!giriş-mesajı #kanal\`**\nBelirtilen Kanala Giriş Mesajı Yollar

                 **•** **\`s!yetkili-rol-ayarla @rol\`**\nKullanıcıyı Kayıt Edecek Olan Rol

                 **•** **\`s!erkek-rol-ayarla @rol\`**\nKayıt Olan Erkek Üyeye Verilecek Rol

                 **•** **\`s!kızrol-ayarla @rol\`**\nKayıt Olan Kız Üyeye Verilecek Rol

                 **•** **\`s!alınacak-rol-ayarla @rol\`**\nKayıt Olan Kullanıcıdan Alınacak Rol

                 **•** **\`s!kayıtbilgi | s!kayıtbilgi @kullanıcı\`**\nKullanıcının Kaç Kişiyi Kayıt Ettiğini Gösterir

                 **•** **\`s!kayıt-sistemi-kapat\`**\nKayıt Sistemini Kapatır ve Tüm Ayarları Sıfırlar`)
    .setFooter(message.author.username)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayıtsistemi","kayıt-sistemi"],
    permLevel: 0
};


exports.help = {
    name: 'kayıt-sistemi',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösterir.',
};