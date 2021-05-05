const mongoose = require("mongoose");
const chalk = require("chalk");

const DB = process.env.MONGOURL.replace("<password>", process.env.MONGOPASS);

module.exports = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.cyan("database connected successfully"));
  })
  .catch((err) => console.log(chalk.red(err)));
