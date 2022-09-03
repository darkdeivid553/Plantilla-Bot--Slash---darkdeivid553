module.exports = {
	name: 'ping',
	description: "Chequea el ping del bot.",
	cooldown: 3000,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
		const msg = await message.reply('Pingueando...')
		await msg.edit(`Pong! **${client.ws.ping} ms**`)
	}
};0