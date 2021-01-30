const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "s!"
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("#964b00")
.setFooter(bot.user.username, bot.user.avatarURL());
    message.channel.send(embed);
    return;
  }

  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.cache.get(args[0]);

  if (!rMember) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(
          `Lütfen bir kullanıcı giriniz!\nÖrnek: ${prefix}isim <@Kullanıcı> <Yeniİsim>`
        )
        .setColor("#964b00")
      .setFooter(bot.user.username, bot.user.avatarURL())
    );
  }

  let isim = args.slice(1).join(' ')
  rMember.setNickname(`${isim}`);
  
  const embed = new Discord.MessageEmbed()
  .setColor("#964b00")
  .setTitle(`İsim Değiştirilme Başarılı!`)
  .setDescription(`${rMember} adlı Üyenin İsmi Değiştirildi!`)
  .setFooter(bot.user.username, bot.user.avatarURL());
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["takma-ad","isim"],
  permLevel: 1,
  kategori: 'moderasyon'
};

exports.help = {
  name: "ad",
  description: "Etiketlenen kişinin adını değiştirirsiniz.",
  usage: "ad"
};
