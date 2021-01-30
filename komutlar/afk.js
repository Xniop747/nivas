const sewox = require("discord.js");
const sewoxdb = require("quick.db");
exports.run = async (client, message, args) => {
  const sewoxkisi = sewoxdb.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (sewoxkisi) return;
  const sewoxsebep = args[0];
  if (!args[0]) {
    let sewoxkullanıcı = message.guild.members.cache.get(message.author.id);
    const sewox = sewoxkullanıcı.displayName;

    await sewoxdb.set(
      `afkSebep_${message.author.id}_${message.guild.id}`,
      "Sebepsiz"
    );
    await sewoxdb.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await sewoxdb.set(`afkAd_${message.author.id}_${message.guild.id}`, sewox);

    const a = await sewoxdb.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    message.channel.send(`**Başarıyla Afk Oldunuz!** \n **Sebep:** **${a}**`);

    message.member.setNickname(`[AFK] ` + sewox);
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const sewox = kullanıcı.displayName;
    await sewoxdb.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await sewoxdb.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await sewoxdb.set(`afkAd_${message.author.id}_${message.guild.id}`, sewox);
    const sewoxa = await sewoxdb.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    message.channel.send(`**Başarıyla Afk Oldunuz!** \n **Sebep:** **${sewoxa}**`);

    message.member.setNickname(`[AFK] ` + sewox);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};
