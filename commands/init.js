const chalk = require("chalk");
const { resolve } = require("path");
const templateList = require(resolve(__dirname, "../template.json"));
const symbols = require("log-symbols");
const ora = require("ora");
const download = require("download-git-repo");

const init = (templateName, projectName) => {
  if (!templateList[templateName]) {
    console.log(chalk.red("\n Template does not exist \n"));
    return;
  }

  let url = templateList[templateName];

  console.log(chalk.green("\n Start generating... \n"));

  const spinner = ora("Downloading...");
  spinner.start();

  download(`direct:${url}`, `./${projectName}`, { clone: true }, (err) => {
    if (err) {
      spinner.fail();
      console.log(
        chalk.red(symbols.error),
        chalk.red(`Generation failed. ${err}`)
      );
      return;
    }

    // 结束加载图标
    spinner.succeed();
    console.log(
      chalk.green(symbols.success),
      chalk.green("Generation completed!")
    );
    console.log("\n To get started");
    console.log(`\n    cd ${projectName} \n`);
  });
};

module.exports = init;
