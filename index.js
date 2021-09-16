const Discord = require('discord.js'),
    DisTube = require('distube'),
    Client = new Discord.Client(),
    config = {
        prefix: "?"
    };

// Create a new DisTube
const distube = new DisTube(Client, { searchSongs: false, emitNewSongOnly: true });

Client.on("ready", async () => {
  console.log(`Iem đã sẵn sàng`)
  Client.user.setActivity("Pông", {type: "PLAYING"});
});

Client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if (command == "play"){
        distube.play(message, args.join(" "));
    }
});

Client.login(process.env.token);