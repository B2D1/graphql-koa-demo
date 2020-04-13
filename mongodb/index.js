const mongoose = require("mongoose");

const { DB_URL } = require("../config");

module.exports = () => {
  mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected to MongoDB ", DB_URL);
  });
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });

  mongoose.connection.on("open", async () => {
    console.log("Connected to MongoDB ", DB_URL);
  });
};
