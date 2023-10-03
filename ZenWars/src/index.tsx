import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from "enmity/metro/common";
import SettingsPage from "../../common/components/_pluginSettings/settingsPage"; // Importez SettingsPage
import manifest from '../manifest.json';
import { commands } from './commands';

const zenwars: Plugin = {
    ...manifest,
    onStart() {
        this.commands = commands
    },
    onStop() {
        // Désinscrivez votre commande "test" ici si nécessaire
        this.commands = [];
    },
    patches: [],
    getSettingsPanel({ settings }): any {
        return <SettingsPage manifest={manifest} settings={settings} hasToasts={false} commands={commands} />;
    },
};

registerPlugin(zenwars); // Enregistrez le plugin sous le nom "ZenWars"