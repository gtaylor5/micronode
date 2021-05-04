import { Command, flags } from '@oclif/command'
import chalk from 'chalk';
import DirUtils from '../util/dir-utils';

export default class CreateService extends Command {
  static description = 'Create a new microservice.'

  static examples = [
    `$ mn create-service gateway .`,
  ]

  static args = [{name: 'name'}]
  static flags = {
    help: flags.help({ char: 'h' }),
    dir: flags.string({
      char: 'd',
      description: 'Location to place the new service.',
      required: true,
      default: process.cwd()
    })
  }


  async run() {
    const { args, flags } = this.parse(CreateService)
    const name = args.name
    const dir = flags.dir;
    const dirUtils = new DirUtils(this.argv, this.config)
    this.log(chalk.green("Creating service named: "), `${chalk.bold.blue(name)}`);
    dirUtils.build(dir, name);
  }
}
