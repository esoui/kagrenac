import * as Generator from "yeoman-generator";

export default class extends Generator {
  constructor(args: string | string[], opts: object) {
    super(args, opts);
  }

  writing() {
    this.sourceRoot(this.options.template);
    this.destinationRoot(this.options.directory);

    this.fs.copyTpl(
      this.templatePath("**/*.*"),
      this.destinationPath(),
      this.options
    );
  }
}
