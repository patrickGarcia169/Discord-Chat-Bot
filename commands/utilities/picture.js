const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require("discord.js");

// Add Picture With Path
const file = new AttachmentBuilder("./props/Dog.jpg");
const picture = new EmbedBuilder()
    .setTitle("Cute Dog")
    .setImage("attachment://Dog.jpg")


module.exports = {

    data: new SlashCommandBuilder()
        .setName("picture")
        .setDescription("Picture of dog"),

    async execute(interaction){
        await interaction.reply({embeds: [picture], files: [file]});
    },
};