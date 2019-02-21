import { Command, flags } from "@oclif/command";
import { pascal } from "change-case";
import { promises as fs } from "fs";
import * as path from "path";
import { getDocumentsFolder } from "platform-folders";

// import { createEnv } from "yeoman-environment";
const createEnv = require("yeoman-environment").createEnv;

const isDirectory = async (...parts: string[]): Promise<boolean> => {
  try {
    const dir = path.resolve(...parts);
    const stats = await fs.stat(dir);
    return stats.isDirectory();
  } catch {
    return false;
  }
};

const selectValidDirectory = async (
  ...dirs: string[]
): Promise<string | null> => {
  for (let dir of dirs) {
    if (await isDirectory(dir)) {
      return dir;
    }
  }
  return null;
};

export default class Create extends Command {
  static description = "create new add-on from a template";

  static examples = ["$ kagrenac create"];

  static flags = {
    help: flags.help({
      char: "h"
    }),
    template: flags.string({
      char: "t",
      description: "name of built-in template or path to your own",
      required: true,
      default: "standalone"
    }),
    name: flags.string({
      char: "n",
      description: "name of the add-on"
    }),
    api: flags.string({
      char: "a",
      description: "interface version the add-on is compatible with",
      default: "100026"
    }),
    path: flags.string({
      char: "p",
      description:
        "where the add-on will be created (defaults to game add-ons folder)"
    }),
    author: flags.string({
      char: "u",
      description: "author of the add-on",
      default: "Your Name"
    }),
    description: flags.string({
      char: "d",
      description: "description of the add-on",
      default: ""
    }),
    variables: flags.string({
      char: "v",
      description: "space separated name of saved variables",
      default: ""
    })
  };

  static args = [
    {
      name: "title",
      description: "add-on name that will be displayed in game",
      required: true
    }
  ];

  async generate(type: string, generatorOpts: object = {}) {
    const env = createEnv();

    env.register(
      require.resolve(path.join("..", "generators", type)),
      `kagrenac:${type}`
    );

    await new Promise((resolve, reject) => {
      env.run(`kagrenac:${type}`, generatorOpts, (err: Error, results: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  async run() {
    const { args, flags } = this.parse(Create);

    const opts = {
      now: new Date(),
      ...flags,
      ...args
    };

    if (!flags.name) {
      opts.name = pascal(args.title);
    }

    if (!opts.path) {
      opts.path = path.join(
        getDocumentsFolder(),
        "Elder Scrolls Online",
        "live",
        "AddOns"
      );
    }

    if (!(await isDirectory(opts.path))) {
      this.error(`path '${opts.path}' could not be read`);
    }
    opts.directory = path.resolve(opts.path, opts.name);

    if (await isDirectory(opts.directory)) {
      this.error(`directory '${opts.directory}' already exist`);
    }

    opts.template = await selectValidDirectory(
      path.resolve(flags.template),
      path.resolve(__dirname, "..", "..", "templates", flags.template)
    );

    if (!opts.template) {
      this.error(`template '${flags.template}' could not be read`);
    }

    await this.generate("add-on", opts);
  }
}
