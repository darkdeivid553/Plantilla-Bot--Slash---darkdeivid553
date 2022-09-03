const { EmbedBuilder } = require('discord.js');
const { ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'plantillaEMBED',
	description: "Descripcion Comando",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {

const embed = new EmbedBuilder()
.setColor(Random) //elije un como ten encuenta tiene que ser por codigo
.setTitle('Aqui pon un titulo')
.setURL('https://discord.gg/G9FfKX3bwZ')
.setAuthor({ name: 'Algun nombre', iconURL: 'https://imgur.com/6ZpMxiG.png', url: 'https://discord.gg/G9FfKX3bwZ' })
.setDescription('Descripcion del EMBED')
.setThumbnail('https://imgur.com/6ZpMxiG.png')
.addFields(
			{ name: 'Titulo de la variable', value: 'Descripcion de la variable' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Titulo de la variable', value: 'Descripcion de la variable', inline: true },
			{ name: 'Titulo de la variable', value: 'Descripcion de la variable', inline: true },
		)
		.addFields({ name: 'Titulo de la variable', value: 'Descripcion de la variable', inline: true })
		.setImage('https://imgur.com/6ZpMxiG.png')
		.setTimestamp()
		.setFooter({ text: 'Aqui pon algun footer', iconURL: 'https://imgur.com/6ZpMxiG.png' });

	interaction.reply({ embeds: [embed] })
	}
};
