const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js'); //definiciones de discord
const client = new Client({ //definicion Client
	intents: [
		GatewayIntentBits.Guilds, //itent, se activa en discord/developer
		GatewayIntentBits.GuildMessages, //itent, se activa en discord/developer
		GatewayIntentBits.GuildPresences, //itent, se activa en discord/developer
		GatewayIntentBits.GuildMessageReactions, //itent, se activa en discord/developer
		GatewayIntentBits.DirectMessages,//itent, se activa en discord/developer
		GatewayIntentBits.MessageContent,//itent, se activa en discord/developer
		GatewayIntentBits.GuildIntegrations,//itent, se activa en discord/developer
        GatewayIntentBits.GuildVoiceStates//itent, se activa en discord/developer
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});

const config = require('./config.json');
const configjs = require("./config.js")
require('dotenv').config() 

client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.prefix = config.prefix //Prefix, no muy necesario ya que tiene Slash.
client.config = configjs;
const player = client.player
module.exports = client;


['command', 'slashCommand', 'events'].forEach((handler) => {
  require(`./Handler/${handler}`)(client)
});


client.login(process.env.TOKEN) //se manda a .env TOKEN= (Token)