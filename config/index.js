const log4js = require("log4js");

const logger = log4js.getLogger();
logger.level = "debug";

const DB_URL = "mongodb://localhost/graphql";

module.exports = { DB_URL, logger };
