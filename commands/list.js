const { showTable } = require(`../util/showTable`);
const templateList = require(`../template`);

const list = () => {
  showTable(templateList);
};

module.exports = list
