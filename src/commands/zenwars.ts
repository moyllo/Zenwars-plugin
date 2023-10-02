import { sendReply } from "enmity/api/clyde";
import { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType, Command } from "enmity/api/commands";
import { getByProps } from "enmity/metro";
import { REST } from "enmity/modules/common";

const zenwars: Command = {
  id: "zenwars-command",

  name: "zenwars",
  displayName: "ZenWars",

  description: "ZenWars description",
  displayDescription: "ZenWars displaydescription",

  type: ApplicationCommandType.Chat,
  inputType: ApplicationCommandInputType.BuiltInText,

  options: [{
    name: "url",
    displayName: "url",

    description: "The URL of the image to petpet",
    displayDescription: "The URL of the image to petpet",

    type: ApplicationCommandOptionType.String,
    required: false
  },
  {
    name: "whisper",
    displayName: "whisper",

    description: "Only you can see the result",
    displayDescription: "Only you can see the result",

    type: ApplicationCommandOptionType.Boolean,
    required: false
  }],

  execute: async function (args, message) {
    // Le reste du code reste le même que dans votre fichier "test.ts"
    // Assurez-vous de mettre à jour toutes les références au fichier "ZenWars.ts" dans votre projet.
  }
}

export { zenwars };
