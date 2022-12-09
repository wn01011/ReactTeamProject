// import { readFile } from "fs/promises";
// import configJson from "../config/config.json";
// const configJson = JSON.parse(
//   await readFile(new URL("../config/config.json", import.meta.url))
// );
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const configJson = require("../config/config.json");

const config = configJson["development"];

import Users from "./user.js";
const db = { Users };

import Sequelize from "sequelize";
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

Users.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
