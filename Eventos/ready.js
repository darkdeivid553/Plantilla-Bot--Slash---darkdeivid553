const client = require('..')
const chalk = require('chalk')

client.on("ready", () => {
	const activities = [
		/*{ name: `${client.guilds.cache.size} Servers`, type: 2 }, 
		{ name: `${client.channels.cache.size} Channels`, type: 0 }, 
		{ name: `${client.users.cache.size} Users`, type: 3 }, 
		{ name: `Kode Bot`, type: 5 } */
        { name: `🚫 | Bot en creación` }
	];
	const status = [
		'online',
		'dnd',
		'idle'
	];
	let i = 0;
	setInterval(() => {
		if(i >= activities.length) i = 0
		client.user.setActivity(activities[i])
		i++;
	}, 5000);

	let s = 0;
	setInterval(() => {
		if(s >= activities.length) s = 0
		client.user.setStatus("idle")
		s++;
	}, 30000);
	console.log(chalk.red(`Me he iniciado como ${client.user.tag}!`))
});