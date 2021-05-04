import Command from "@oclif/command";
import chalk from 'chalk';
import { nodeCommands } from './node-cmds';
const fs = require("fs");
const path = require("path");
const templateDir = path.join(__dirname, "../templates");

export default class DirUtils extends Command {

  private copyUtil = (fromPath: string, toPath: string, successMsg: string) => {
    return fs.copyFile(fromPath, toPath, (err: any) => {
      if (err) {
        this.log(chalk.bold.red(err));
        this.exit(1);
      } else {
        this.log(chalk.green(successMsg))
      }
    });
  }

  createApi = async (baseDir: string) => {
    this.log(chalk.yellow("Initializing API..."));
    const API = "api";
    const apiPath = path.join(baseDir, API);
    const apiTemplate = path.join(templateDir, "api.js");
    fs.mkdirSync(apiPath);
    return this.copyUtil(apiTemplate, path.join(apiPath, "api.js"), "API Created.");
  };

  createIndex = async (baseDir: String, serviceName: String) => {
    this.log(chalk.yellow("Creating index.js ..."));
    return fs.readFile(path.join(templateDir, "server.js"), 'utf8', async (err: any, data: string) => {
      if (err) {
        this.log(chalk.bold.red("Error creating server file."))
        this.log(err);
        this.exit(1);
      }

      var result = data.replace(/SERVICE_NAME_HERE/g, `\"${serviceName}\"`)
      return fs.writeFile(path.join(baseDir, 'index.js'), result, 'utf8', (err: any) => {
        if (err) {
          this.log(chalk.bold.red("Error creating server file."))
          this.log(err);
          this.exit(1);
        } else {
          this.log(chalk.bold.green("Server definition successfully created."));
        }
      });
    });
  };

  createDockerfile = async (baseDir: string,) => {
    this.log(chalk.yellow("Creating Dockerfile..."))
    const templatePath = path.join(__dirname, "../templates/Dockerfile.template")
    const destPath = path.join(baseDir, "Dockerfile");
    return this.copyUtil(templatePath, destPath, "Dockerfile created.")
  }

  initializeNodeProject = (dir: string) => {
    nodeCommands().forEach(cmd => cmd.exec(dir));
  }

  build = async (baseDir: string, serviceName: string) => {
    const dir = path.join(baseDir, serviceName);
    this.log(chalk.green("Directory: "), chalk.blue.bold(dir));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      this.initializeNodeProject(dir);
      await this.createDockerfile(dir);
      await this.createApi(dir);
      await this.createIndex(dir, serviceName);
    } else {
      console.log(chalk.bold.red(`Error: ${dir} already exists.`));
      this.exit(1);
    }
  };

  async run() {
    
  }
}