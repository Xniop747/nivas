const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[` ©️ SweeT Bot (V12) ©️ `]▬▬▬▬▬▬**")
.setImage('https://cdn.discordapp.com/attachments/803943227937652777/804759658551705671/standard_6.gif')
.setDescription(`

> **» s!eğlence:** Eğlence Komutlarını Gösterir. 
> **» s!moderasyon:** Moderasyon Komutlarını Gösterir.
> **» s!kullanıcı:** Kullanıcı Komutlarını Gösterir.
> **» s!sunucu:** Sunucu İle İlgili Komutları Gösterir.
> **» s!botbilgi:** Botun İstatistiklerini Gösterir.

> **Bağlantılar** 
> **[Destek Sunucusu](https://discord.gg/fg73CZ7m)** **•** **[Botun Davet Linki](http://bit.ly/sweetbot)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};