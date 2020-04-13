const mongoose = require("mongoose");

const { DB_URL, logger } = require("../config");

module.exports = () => {
  mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

  mongoose.connection.on("disconnected", () => {
    logger.info("Disconnected to MongoDB ", DB_URL);
  });

  mongoose.connection.on("error", (err) => {
    logger.warn(err);
  });

  mongoose.connection.on("open", () => {
    logger.info("Connected to MongoDB ", DB_URL);
  });
};
