const inquirer = require("inquirer");
const fs = require("fs");
const templateList = require("../template.json");
const path = require('path')
const { showTable } = require("../util/showTable");
const symbols = require("log-symbols");
const chalk = require("chalk");
chalk.level = 1;

let question = [
  {
    name: "name",
    message: "请输入删除节点名称",
    validate: (val) => {
      if (!val) {
        return "Name is require";
      } else if (!templateList[val]) {
        return "Template does not exist";
      } else {
        return true;
      }
    },
  },
];

const deleteTemplate = () => {
  inquirer.prompt(question).then((answers) => {
    const { name } = answers;
  
    Reflect.deleteProperty(templateList, name);
  
    fs.writeFile(
      path.resolve(__dirname, '../template.json'),
      JSON.stringify(templateList),
      "utf-8",
      (err) => {
        if (err) console.log(chalk.red(symbols.error), chalk.red(err));
  
        console.log("\n");
        console.log(
          chalk.green(symbols.success),
          chalk.green("Deleted successfully!\n")
        );
        console.log(chalk.green('The latest templateList is: \n'))
        showTable(templateList)
      }
    );
  });
}

module.exports = deleteTemplate

