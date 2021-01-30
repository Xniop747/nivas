const { MessageEmbed } = require("discord.js");
exports.run = (Bot, Mesaj, Argüman) => {
  const Sayı = Number(Argüman[0]);

  const Hata = new MessageEmbed()
    .setColor("#7f0000")
    .setTitle("Hata!")
    .setFooter(`${Mesaj.author.username} Tarafından İstendi.`,Mesaj.author.avatarURL());

  const Başarılı = new MessageEmbed()
  .setTitle(`${Sayı} adet mesaj başarıyla silindi!`)
    .setColor("#007f00")
    .setFooter(`${Mesaj.author.username} Tarafından İstendi.`,Mesaj.author.avatarURL());
  {
    if (!Mesaj.member.hasPermission("MANAGE_MESSAGES")) {
      Hata.setDescription("Bu komutu kullanmak için `Mesajları Yönet` yetkisine sahip olmanız gerekmektedir.");
      Mesaj.channel.send(Hata).then(msg => msg.delete({ timeout: 5000}));
      
    } else {
      if (!Sayı) {
        Hata.setDescription("Bir sayı belirtiniz.");
        Mesaj.channel.send(Hata).then(msg => msg.delete({ timeout: 5000}));
      } else {
        if (Sayı < 101) {
          Başarılı.setDescription(`${Sayı} adet mesaj başarıyla silindi!`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 5000}));
          Mesaj.channel.bulkDelete(Sayı);
        }
        if (Sayı > 100 && Sayı < 200) {
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 100);
                      Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 5000}));

          });
        }
        if (Sayı == 200) {
          Başarılı.setDescription(`${Sayı} adet mesaj başarıyla silindi!`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
        }
        if (Sayı > 200 && Sayı < 300) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 200);
                    Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 5000}));

          });
          
        }
        if (Sayı == 300) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
                    Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));

        }
        if (Sayı > 300 && Sayı < 400) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 300);
                                  Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 8000}));

          });
        }
        if (Sayı == 400) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
                    Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));

        }
        if (Sayı > 400 && Sayı < 500) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 400);
                      Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 7000}));

          });
        }
        if (Sayı == 500) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
                    Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));

        }
        if (Sayı > 500 && Sayı < 600) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 500);
                      Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 8000}));

          });
        }
        if (Sayı == 600) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
                    Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));

        }
        if (Sayı > 600 && Sayı < 700) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 600);
                      Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 5900}));

          });
        }
        if (Sayı == 700) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
        }
        if (Sayı > 700 && Sayı < 800) {
          Başarılı.setDescription(`${Sayı} adet mesaj başarıyla silindi!`);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {

            Mesaj.channel.bulkDelete(Sayı - 700);
                                  Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 10000}));

          });
        }
        if (Sayı == 800) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);  
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 10000}));

        }
        if (Sayı > 800 && Sayı < 900) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 800);
                      Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 11000}));

          });
        }
        if (Sayı == 900) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));
        }
        if (Sayı > 900 && Sayı < 1000) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100).then(() => {
            Mesaj.channel.bulkDelete(Sayı - 900);
                      Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 12000}));

          });
        }

        if (Sayı == 1000) {
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);
          Mesaj.channel.bulkDelete(100);                
          Mesaj.channel.send(Başarılı).then(msg => msg.delete({ timeout: 13000}));

        }
        if (Sayı > 1000) {
          Hata.setDescription("En fazla 1000 adet mesaj silebilirsiniz.");
          Mesaj.channel.send(Hata).then(msg => msg.delete({ timeout: 5000}));
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Temizle", "sil", "temizle"],
  permLevel: 0
};

exports.help = {
  name: "sil"
};