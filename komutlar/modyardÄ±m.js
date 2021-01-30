const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **SweeT Bot (V12)** ©️ **]▬▬▬▬▬▬**")
.setImage("https://cdn.discordapp.com/attachments/803943227937652777/804759658551705671/standard_6.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Yardım Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» s!ban:** Etiketlenen Kişiyi Banlar. 
> **» s!unban:** Etiketlenen Kişinin Banını Kaldırır. 
> **» s!kick:** Etiketlenen Kişiyi Atar.
> **» s!mute:**   Etiketlenen Kişiyi Susturur.
> **» s!unmute:**   Etiketlenen Kişinin Sustururmasını Kaldırır.
> **» s!isim:** Etiketlenen Kişinin İsmini Değiştirir.
> **» s!küfürengel:** Etkin Haldeyken Edilen Küfürleri Temizler.
> **» s!slowmod:** Yavaş-Mod Özelliğini Aktif eder.
> **» s!isim:** Etiketlediğiniz Kişinin İsmini Değiştirir.


**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/fg73CZ7m)** **•** **[Botun Davet Linki](http://bit.ly/sweetbot)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['mod-yardım','moderasyon',"moderasyon-yardım",'mod'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'mod-yardım', 
    description: 'The Help Command',
    usage: 'mod-yardım'
};