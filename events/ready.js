const Discord = require('discord.js');
const prefix = process.env.PREFIX;

module.exports = client => {
var oynuyorkısımları = [
"İmkansızı başarmak istiyorsan, elini kirletmekten kaçınmayacaksın!",
  "Sanki çok ömrümüz varmış gibi, beklemeyi öğretiyor bize hayat.",
  "Yorum yapmak, olayı sadece kenardan izleyenlerin lüksüdür",
  "Seçim yapmadığın sürece, kalan olasılıkların hepsi mümkündür.",

"Ölmekten korkmuyorum yeterince, yaşamamış olmaktan korkuyorum.",
  "Yaratıcı, beni neden öldürmek için yarattın.",
  "Dünya, eğitim görmüş aptallarla doludur. Azmin ve kararlılığın gücü sınırsızdır.",
  "Edit Yapmak Hazır Efektleri Layere Atmak Değildir...",







"Sahip oldukların, sonunda sana sahip olur."

]


setInterval(function() {

        var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
       client.user.setActivity(oynuyorkısımları[random], { type: 'PLAYING' });
        }, 2 * 3000);
}