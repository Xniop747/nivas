const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();


exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || (args.length > 0 ? bot.users.cache.filter(e => e.id.toLowerCase().includes(args.join(" ").toLowerCase())).first(): msg.author) || msg.author
  
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL({dynamic: true})
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)

        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)

        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('DD/MM/YYYY')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('DD/MM/YYYY')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        let kullanıcımembers = msg.guild.members.cache.get(user.id)
        const flags = await kullanıcımembers.user.fetchFlags()

        const status = flags.toArray()



        const uembed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .addField(`Şu anda oynadığı oyun`, userinfo.od1, false)
        .addField(`Durum`, userinfo.status, false)
        .setColor('#964b00')
        .addField(`Katılım Tarihleri`, `Sunucu: ${userinfo.dctarihkatilma}\nDiscord: ${userinfo.dctarih}`)
        .addField(`Kimlik:`, userinfo.id, true)
        .addField(`Botmu:`, userinfo.bot, true)
        
                return msg.channel.send(uembed).catch()
    }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`kullanıcıbilgi`,`kullanıcıbilgim`,`kullanıcıbilgisi`,`kullanıcı-bilgim`,`kullanıcı-bilgisi`,"kb"],
  kategori: 'kullanıcı',
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı-bilgi'
};

