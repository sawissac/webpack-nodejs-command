const fs = require("fs");
const path = require("path");
const commandLineArgs = require("command-line-args");

require("dotenv").config({ path: path.resolve(__dirname, ".env") });

// ! The for web pack config

const optionDefinitions = [
  { name: "mode", alias: "m", type: String },
  { name: "watch", alias: "w", type: Boolean },
];

const options = commandLineArgs(optionDefinitions);

const mode = options.mode;
const watch = options.watch ? "yes" : "no";

const content = `WP_MODE=${mode} \nWP_WATCH=${watch}`;

if (
  process.env.WP_MODE !== options.mode &&
  process.env.WP_WATCH !== options.watch
) {
  const envDir = path.resolve(__dirname, ".env");

  fs.writeFileSync(envDir, content, {
    encoding: "utf8",
    flag: "w",
  });

  console.log("File has been changed...");
} else {
  console.log("File not changed...");
}
