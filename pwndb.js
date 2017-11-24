const Discord = require('discord.js');
const client = new Discord.Client();
const YTDL = require("ytdl-core");
const prefix = "&";

//clbot.configure({botapi: "uidbkLf1OE5CrtkLFDPd7V4GJetvUwFx"});

//var bot = new cleverbot('ObcPfpZSmQ7lOsY0','uidbkLf1OE5CrtkLFDPd7V4GJetvUwFx')


client.on('ready', () => {
	console.log('pwndb is online');
	client.user.setStatus('idle')
	client.user.setGame('bleep blop | Type &info!')
});

var servers = {};

function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

	server.queue.shift();

	server.dispatcher.on("end", function () {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	})
}

client.on('message', message => {
	if (!message.content.startsWith(prefix)) return;

	var args = message.content.substring(prefix.length).split(" ");

	switch (args[0].toLowerCase()) {
		case "ping":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", ":ping_pong: Pong at " + (Date.now() - message.createdTimestamp) + " ms!")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('ðŸ“')
			message.channel.send(embed);
			break;
		case "info":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "Hi! im PWNDB, I'm a bot!")
				.addField("Commands:", "For a list of commands, type &help!")
				.addField("Language:", "JavaScipt (Discord.js)")
				.addField("Developers:", "Type &dev for more info!")
				.setColor(0x9b02f9)
				.setThumbnail(message.client.user.avatarURL)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('ðŸ’')
			message.channel.send(embed);
			break;
		case "embed":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "Pwndb is starting to use Embeds")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âœ…')
			message.channel.send(embed);
			break;
		case "help":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "[Click Here!](https://sites.google.com/view/pwndb/info)", true)
				.setColor(0x9b02f9)
				.setThumbnail(message.client.user.avatarURL)
				.setFooter("JOIN THE DISCORD SERVER: https://discord.gg/XjaCYTc");
			var embed2 = new Discord.RichEmbed()
				.addField("PWNDB :gear:", ":rocket: Help is on its way to your Direct Messages!")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('ðŸš€')
			message.author.send(embed)
			message.channel.send(embed2);
			break;
		case "invite":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "Invite me here!:")
				.addField("Link:", "[Click Here!](https://discordapp.com/oauth2/authorize?client_id=356300994360901632&scope=bot&permissions=37080134)")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âœ…')
			message.channel.send(embed);
			break;
		case "lit":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "ay thats quite lit bruh :fire: :fire: :100: ")
				.setColor(0xf77b00)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('ðŸ”¥')
			message.react('ðŸ’¯')
			message.channel.send(embed);
			break;
		case "avatar":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "Your PFP:")
				.setThumbnail(message.author.avatarURL)
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âœ…')
			message.channel.send(embed);
			break;
		case "discord":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "We have a Discord Server!")
				.addField("Link:", "[Click Here!](https://discord.gg/keEseTj)")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âœ…')
			message.channel.send(embed);
			break;
		case "pong":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "Wrong way round! Your supposed to use Ping!")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âœ…')
			message.channel.send(embed);
			break;
		case "dev":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "Development Team:")
				.addField("Lead Developer:", "<:jijipwn:359951310411530242> jijipwn (Discord: @jiji#0707)")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âœ…')
			message.channel.send(embed);
			break;
		case "jijipwn":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", "<:jijipwn:359951310411530242> jijipwn is my creator if it isnt obvious")
				.addField("Guess what?", "You just found an easter egg!!")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âœ…')
			message.channel.send(embed);
			break;
		case "f":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :regional_indicator_f:", "React with :regional_indicator_f: to pay respects")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âœ…')
			message.channel.send(embed);
			break;
		case "play":
		    var link = new Discord.RichEmbed()
				.addField("PWNDB :musical_note:", "Please Provide a Link.")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			var channel = new Discord.RichEmbed()
				.addField("PWNDB :musical_note:", "Please join a Voice Channel")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			if (!args[1]) {
				message.react('âŽ')
				message.channel.send(link)
				return;
			}

			if (!message.member.voiceChannel) {
				message.react('âŽ')
				message.channel.send(channel)
				return;
			}

			if (!servers[message.guild.id]) servers[message.guild.id] = {
				queue: []
			}
			message.react('âœ…')

			var server = servers[message.guild.id];

			server.queue.push(args[1]);

			if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
				play(connection, message);
				message.react('ðŸŽ§')
			})
			break;
		case "music-info":
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :musical_note:", "REMEMBER: :white_check_mark: MEANS PWNDB HAS SUCCESSFULLY GOT THE SONG, :headphones: MEAN PWNDB IS ATTEMPTING TO PLAY THE SONG")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âŽ')
			message.channel.send(embed);
		break;
		case "skip":
			var server = servers[message.guild.id];

			if (server.dispatcher) server.dispatcher.end();
			message.react('âœ…')
			break;
		case "stop":
			var server = servers[message.guild.id];

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
			message.react('âœ…')
			break;
		default:
			var embed = new Discord.RichEmbed()
				.addField("PWNDB :gear:", ":warning: :warning: That command doesn't exist in my code, try &help! ")
				.setColor(0x9b02f9)
				.setFooter("PWNDB IS DEVELOPED BY @jiji#0707 USING DISCORD.JS");
			message.react('âŽ')
			message.channel.send(embed);
	}
});

client.login('INSERT TOKEN');