import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from "enmity/metro/common";
import SettingsPage from "../../common/components/_pluginSettings/settingsPage"; // Importez SettingsPage
import manifest from '../manifest.json';
import { test } from './test'; // Importez votre commande "test" depuis le fichier correspondant

const ZenWars: Plugin = {
    ...manifest,
    onStart() {
        // Enregistrez votre commande "test" ici
        this.commands = [test];
    },
    onStop() {
        // Désinscrivez votre commande "test" ici si nécessaire
        this.commands = [];
    },
    patches: [],
    getSettingsPanel({ settings }): any {
        // Utilisez SettingsPage pour afficher les paramètres
        return (
            <SettingsPage manifest={manifest} settings={settings} hasToasts={false} commands={this.commands} />
        );
    },
};

registerPlugin(ZenWars); // Enregistrez le plugin sous le nom "ZenWars"
