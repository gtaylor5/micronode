import { deps } from "./deps";

const stringDeps = deps.join(" ");
const cmds = [
  {
    cmd: "npm init -y",
    pre: "Running npm init...",
    post: "Node Project Initialized",
  },
  {
    cmd: "npm install " + stringDeps,
    pre: "Installing Dependencies...",
    post:
      "Dependencies Installed:\n  " +
      chalk.bold.blue("- ") +
      chalk.bold.blue(deps.join("\n  - ")),
  },
];

export const nodeCommands: () => Command[] = () => {
    return cmds.map(data => {
        const { cmd, pre, post } = data;
        return new Command(cmd, pre, post);
    });
}
