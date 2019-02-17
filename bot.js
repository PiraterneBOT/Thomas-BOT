const Discord = require('discord.js');
const client = new Discord.Client();
const invites = {};

client.on("ready", () => {
  console.log("Jeg er klar!");
});

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
    // "ready" isn't really ready. We need to wait a spell.
    wait(1000);

    // Load all invites for all guilds and save them to the cache.
    client.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[g.id] = guildInvites;
        });
    });
});

client.on('guildMemberAdd', member => {
    // To compare, we need to load the current invite list.
    member.guild.fetchInvites().then(guildInvites => {
        // This is the *existing* invites for the guild.
        const ei = invites[member.guild.id];

        // Update the cached invites
        invites[member.guild.id] = guildInvites;

        // Look through the invites, find the one for which the uses went up.
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

        console.log(invite.code)

        if (invite.code === "PBE7Qnc") {
            return member.addRole(member.guild.roles.find(role => role.name === "MEDLEM"));
        }
    });
});

client.on('message', message => {
    if (message.content === 'Hey') {
    	message.channel.send('Heeey <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.channel.send('Heeey <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'Goddag') {
    	message.channel.send('Goddag <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'goddag') {
    	message.channel.send('Goddag <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'Godmorgen') {
    	message.channel.send('Godmorgen <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'godmorgen') {
    	message.channel.send('Godmorgen <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'Godaften') {
    	message.channel.send('Godaften <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'godaften') {
    	message.channel.send('Godaften <:Love:537271965023731742> - ' + message.author);
    }
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
