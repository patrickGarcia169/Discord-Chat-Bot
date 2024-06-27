const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require("discord.js");

function objCreation(fileName, title){
    const file = new AttachmentBuilder(`./props/${fileName}`);
    const picture = new EmbedBuilder()
        .setTitle(title)
        .setImage(`attachment://${fileName}`)
    
    return [picture, file];
};

function randChoice(array){
    const choices = array.length;
    const choice = Math.floor(Math.random() * choices);

    const fileName = array[choice][0];
    const title = array[choice][1];

    return [fileName, title];
}

// Random Array
randArr = [
    ["Dog.jpg", "Cute Dog"], ["Cat.jpg", "Cute Cat"], ["Bird.jpg", "Cute Bird"]
];

// Choice
const [fileName, title] = randChoice(randArr);

// Object Creation
let [picture, file] = objCreation(fileName, title);

module.exports = {

    data: new SlashCommandBuilder()
        .setName("picture")
        .setDescription("Picture of animal"),

    async execute(interaction){
        await interaction.reply({embeds: [picture], files: [file]});
        
    },
};