import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv";
import axios from "axios";

//config the .env file
dotenv.config();

// Express Server Url from .env
const expressAppURL = process.env.EXPRESS_URL;

// Created a instance of Discord Client Class  used to interact to discord
const client = new Client({ intents: [
    GatewayIntentBits.Guilds ,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
] });

// calling on method on client class which is used for set up of event listiner in it
client.on("messageCreate", async (message) => {

    // do not reply on bot message
    if(message.author.bot) return;

    // If Hello is input from user then it reply by the content  
    if(message.content.startsWith("Hello")){
        message.reply({
            content: `Hello ${message.author.username}`
        });
    }

    //check if input start fom create
    if(message.content.startsWith("create")){
        
        // store the text after create which would be url 
        const url = message.content.split("create")[1].trim();

        // check for vaild url
        function isValidURL(string) {
            try {
              new URL(string);
              return true;
            } catch (_) {
              return false;  
            }
          }
        
        if (!isValidURL(url)) {
            message.reply('Invalid command! Please use `create <URL>` to shorten a URL.');
            return;
        }

        // connect to express server for shorting the url and provide the shor url
        try {
            const response = await axios.post(`${expressAppURL}/create`, { url });
            const data = response.data;
            message.reply(`Shortened URL: ${data}`);
        } catch (err) {
            console.error('Error:', err);
            message.reply('An error occurred');
        }
    }
});


// by this cammonds can be add  
// client.on("interactionCreate", (interaction) => {
//     interaction.reply("Pong");
// })

// This is the login method a thsi log the discord Api
client.login(process.env.TOKEN);