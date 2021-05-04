const chalk = require('chalk');
const { execSync } = require('child_process');

export default class Command {

    static log = console.log

    /**
     * Underlying Command to be executed.
     */
    private command: string;
    
    /**
     * Log statement to be printed prior to running.
     */
    private pre: string;

    /**
     * Log statement to be printed on successful completion.
     */
    private post: string

    constructor(cmd: string, pre: string, post: string) {
        this.command = cmd;
        this.pre = pre;
        this.post = post;
    }

    /**
     * Execute this command.
     * @param dir directory where the command should be run. 
     * Defaults to current working directory.
     */
    exec(dir: string = process.cwd()) {
      Command.log(chalk.yellow(this.pre));
      execSync(this.command, { cwd: dir });
      Command.log(chalk.green(this.post));
      Command.log();
    }
}