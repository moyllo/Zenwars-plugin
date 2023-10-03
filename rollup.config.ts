import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
import { defineConfig } from "rollup";

const plugins = ["ZenWars", "MessageSpoofer", "NoDelete", "HideBlockedMessages", "AmongUs", "sarp", "piss", "ReviewDB", "BetterTwitterEmbeds", "BetterTiktokEmbeds", "PetPet", "GotFemboys", "GotFeet", "FriendInvites", "CustomSlowmode", "slayify"];
export default () => {
  const configs = plugins.map((name) => {
    return defineConfig({
      input: `${name}/src/index.tsx`,
      output: [
        {
          file: `dist/${name}.js`,
          format: "cjs",
          strict: false,
        },
      ],
      plugins: [
        nodeResolve(),
        commonjs(),
        json(),
        esbuild({ minify: true, target: "ES2020" }),
      ],
    });
  });
  return configs;
};