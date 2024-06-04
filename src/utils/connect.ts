const mongoose = require("mongoose");
const configDefault = require("config");

import log from "./logger";

let isConnected = false;

async function connect() {
  const dbUri = configDefault.get("dbUri") as string;

  mongoose.set("strictQuery", true);

  if (isConnected) {
    log.info("MongoDB is already connected !!");
    return;
  }

  try {
    await mongoose.connect(dbUri, {
      dbName: "rest-api-tuts",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    log.info("Connected to database successfully.");
  } catch (err) {
    console.log(err);
  }
}

export default connect;
