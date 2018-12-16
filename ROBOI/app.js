const	discord = require('discord.js');
const	client = new discord.Client();
const	settings = require('./settings.json');

var		params = [];
var		sizes = [];
var		color;

client.on('ready',() => {
	console.log('I\'m online!\nI\'m online!');
})

client.on('message', (message) => {
	if (message.content.toLowerCase() === '!gun'){
		message.channel.send(":gun:");
	}
})

client.on('message', (message) => {
	if (message.content.toLowerCase() === '!gunboi'){
		message.channel.send(":maxpower:");
	}
})

client.on('message', (message) => {
	if (message.content.toLowerCase() === '!eggplant')
		message.channel.send("no.");
})

client.on('message', (message) => {
	if (message.content.toLowerCase() === '!memehand')
		message.channel.send(":ok_hand:");
})

client.on('message', (message) => {
	if (message.content.toLowerCase() === '!eyes')
		message.channel.send(":eyes:");
})

client.on('message', (message) => {
	if (message.content.toLowerCase().includes('!doot'))
		message.channel.send(":skull: :trumpet:");
})

client.on('message', (message) => {
	if (message.content.toLowerCase() === '!ROBOI'){
		message.channel.send("Hey, this is me!");
		message.channel.send(settings.roboi_face);
	}
})

client.on('message', (message) => {
	if (message.content.toLowerCase() === '!dragon'){
		proportions(getRandomInt(7));
		if (sizes[0] !== 0){
			params[0] += "This dragon is " + sizes[0] + " feet long,"
			+ " " + Math.floor(sizes[1]) + " feet tall"
			+ " and has a wingspan of " + Math.floor(sizes[2]) + " feet. ";
		}
		if (getRandomInt(2) == 1)
			color_chromatic(getRandomInt(9) + 1);
		else
			color_metallic(getRandomInt(9) + 1);
		breath(getRandomInt(11) + 1);
		alignment(getRandomInt(9) + 1);
		message.channel.send(params[0] + params[1] + params[2] + params[3]);
	}

})

function proportions(roll) {
	switch (roll)
	{
		case 1:
			sizes[0] = 15;
			params[0] = settings.dragon.size.smol;
			break ;
		case 2:
			sizes[0] = 25;
			params[0] = settings.dragon.size.medsmol;
			break ;
		case 3:
			sizes[0] = 60;
			params[0] = settings.dragon.size.med;
			break ;
		case 4:
			sizes[0] = 90;
			params[0] = settings.dragon.size.medlrg;
			break ;
		case 5:
			sizes[0] = 120;
			params[0] = settings.dragon.size.large;
			break ;
		case 6:
			sizes[0] = 150;
			params[0] = settings.dragon.size.vlarge;
			break ;
		default:
			sizes[0] = 0;
			params[0] = settings.dragon.size.behemoth;
	}
	sizes[1] = ((sizes[0] * 5) / 3);
	sizes[2] = ((sizes[0] * 5) / 2);

}

function color_chromatic(roll) {
	switch (roll)
	{
		case 1:
			params[1] = settings.dragon.color.chromatic.white;
			break ;
		case 2:
			params[1] = settings.dragon.color.chromatic.red;
			break ;
		case 3:
			params[1] = settings.dragon.color.chromatic.orange;
			break ;
		case 4:
			params[1] = settings.dragon.color.chromatic.yellow;
			break ;
		case 5:
			params[1] = settings.dragon.color.chromatic.green;
		case 6:
			params[1] = settings.dragon.color.chromatic.blue;
			break ;
		case 7:
			params[1] = settings.dragon.color.chromatic.indigo;
			break ;
		case 8:
			params[1] = settings.dragon.color.chromatic.violet;
			break ;
		case 9:
			params[1] = settings.dragon.color.chromatic.black;
			break ;
		default:
			params[1] = "Oliver did something wrong in the chromatic "
			+ "color assignments! The numer I generated was " + roll
			+ ", outside of acceptable parameters!";
	}
}

function color_metallic(roll) {
	switch (roll)
	{
		case 1:
			params[1] = settings.dragon.color.metallic.silver;
			break ;
		case 2:
			params[1] = settings.dragon.color.metallic.gold;
			break ;
		case 3:
			params[1] = settings.dragon.color.metallic.copper;
			break ;
		case 4:
			params[1] = settings.dragon.color.metallic.brass;
			break ;
		case 5:
			params[1] = settings.dragon.color.metallic.iron;
			break ;
		case 6:
			params[1] = settings.dragon.color.metallic.aluminum;
			break ;
		case 7:
			params[1] = settings.dragon.color.metallic.bronze;
			break ;
		case 8:
			params[1] = settings.dragon.color.metallic.mercury;
			break ;
		case 9:
			params[1] = settings.dragon.color.metallic.cobalt;
			break ;
	}
}

function breath(roll) {
	switch (roll)
	{
		case 1:
			params[2] = settings.dragon.breath.death;
			break ;
		case 2:
			params[2] = settings.dragon.breath.life;
			break ;
		case 3:
			params[2] = settings.dragon.breath.time;
			break ;
		case 4:
			params[2] = settings.dragon.breath.blade;
			break ;
		case 5:
			params[2] = settings.dragon.breath.lightning;
			break ;
		case 6:
			params[2] = settings.dragon.breath.space;
			break ;
		case 7:
			params[2] = settings.dragon.breath.arcane;
			break ;
		case 8:
			params[2] = settings.dragon.breath.fire;
			break ;
		case 9:
			params[2] = settings.dragon.breath.water;
			break ;
		case 10:
			params[2] = settings.dragon.breath.air;
			break ;
		case 11:
			params[2] = settings.dragon.breath.earth;
			break ;
		default:
			params[2] = "Oliver fucked up the breath weapon assignment!";
	}
}

function alignment(roll) {
	switch (roll)
	{
		case 1:
			params[3] = settings.dragon.alignment.LG;
			break ;
		case 2:
			params[3] = settings.dragon.alignment.NG;
			break ;
		case 3:
			params[3] = settings.dragon.alignment.CG;
			break ;
		case 4:
			params[3] = settings.dragon.alignment.LN;
			break ;
		case 5:
			params[3] = settings.dragon.alignment.TN;
			break ;
		case 6:
			params[3] = settings.dragon.alignment.CN;
			break ;
		case 7:
			params[3] = settings.dragon.alignment.LE;
			break ;
		case 8:
			params[3] = settings.dragon.alignment.NE;
			break ;
		case 9:
			params[3] = settings.dragon.alignment.CE;
			break ;
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

client.login(settings.token).catch((error) => console.error(error));
//VERY IMPORTANT THIS IS BASICALLY HOW YOU TURN BOTS ON