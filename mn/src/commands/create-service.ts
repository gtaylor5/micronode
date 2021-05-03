import { Command, flags } from '@oclif/command'
import DirUtils from '../util/dir-utils';

export default class CreateService extends Command {
  static description = 'Create a new microservice.'

  static examples = [
    `$ mn create-service gateway`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    dir: flags.string({
      char: 'd',
      description: 'Location to places the new service.',
      required: true
    })
  }

  static args = [{name: 'name'}]

  async run() {
    const { args, flags } = this.parse(CreateService)
    const name = args.name
    const dir = flags.dir;
    const dirUtils = new DirUtils(this.argv, this.config)
    this.log(`Creating Microservice Named: ${name} in Directory ${dir}`);
    dirUtils.build(dir, name);
  }
}
