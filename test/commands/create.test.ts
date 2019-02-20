import { expect, test } from "@oclif/test";
import { promises as fs } from "fs";
import * as path from "path";

// import * as rimraf from "rimraf";
const rimraf = require("rimraf").sync;

const tempDir = path.join(__dirname, "..", "..", "tmp");

describe("create", () => {
  beforeEach(async () => {
    try {
      await fs.mkdir(tempDir);
    } catch {}
    rimraf(path.join(tempDir, "*"));
  });

  test
    .stdout()
    .command(["create", "My Add-on", "-p", tempDir])
    .it("runs create", async ctx => {
      const stats = await fs.stat(path.join(tempDir, "MyAddOn"));
      expect(stats.isDirectory()).to.be.true;
    });
});
