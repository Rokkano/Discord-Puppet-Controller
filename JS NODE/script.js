const Discord = require('discord.js');
const client = new Discord.Client();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


//Webhook Configuration
process.title = "DPC ~ Discord Puppet Control";
rl.question('Enter Puppet URL :', function (answer) {
	if (answer!=''){
		
		var sourceCodeWebHook;
		var sourceCodeGuild;
		var sourceCodeChannel;
		var config;
		
		xmlhttp=new XMLHttpRequest();
		xmlhttp.onloadend=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				if (sourceCodeWebHook==null)
					sourceCodeWebHook = xmlhttp.responseText;
				else if (
			}
		}
		xmlhttp.open("GET", answer, false );
		xmlhttp.send();
		config = JSON.parse(sourceCodeWebHook);
		process.title = "DPC ~ Discord Puppet Control : " + config.name;
		
		console.log(config);
		
		const webhookClient = new Discord.WebhookClient(config.id, config.token);
		console.log(webhookClient.webHook);
		client.login(config.token);
		process.stdout.write("Connected to discord.js API : \nName : " + config.name + "\nid : " + config.id 
		+ "\nGuild : " + client);
		recursiveAsyncReadLine(webhookClient);	
}});
 
var recursiveAsyncReadLine = function (webhookClient) {
  rl.question('', function (answer) {
	webhookClient.send(answer);
    recursiveAsyncReadLine();
  });
};