#!/usr/bin/env node
const program = require("commander");
const init = require("./commands/init");
const add = require("./commands/add");
const list = require("./commands/list");
const deleteTemplate = require("./commands/delete")
program.usage("<command>");

program.version(require("./package").version);

program
  .command("add")
  .description("add a new template")
  .action(add);

program
  .command("ls")
  .description("List the templateList")
  .action(list);

program
  .command("delete")
  .description("delete a template")
  .action(deleteTemplate);

program
  .command("init <template-name> <project-name>")
  .description("init a program")
  .action(init);

program.parse(process.argv);
