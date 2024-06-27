const { SlashCommandBuilder } = require("discord.js");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("greeting")
        .setDescription("Greets the user"),

    async execute(interaction){
        await interaction.reply(`Hello, ${interaction.user.displayName}`);
    },
};