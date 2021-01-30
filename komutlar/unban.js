const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s!";
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("``` Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("#964b00");

    message.channel.send(embed);
    return;
  }

  let u = args[0]
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen sunucudan yasağı kaldırılacak kişinin idsini giriniz!")
        .setColor("#964b00")
        .setFooter(bot.user.username, bot.user.avatarURL())
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("#964b00")
    .setDescription(`${u} Adlı şahsın yasaklanmasının kalkmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL());
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          ` İşlem onaylandı! ${u} adlı şahıs sunucudan yasağı kaldırıldı!`
        );

        message.guild.members.unban(u);
      }
    });
  });
};

module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "unban",
  description: "unban",
  usage: "unban"
};
