const express = require("express");
const configDefault = require("config");

import connect from "./utils/connect";
import log from "./utils/logger";

const app = express();

const PORT = process.env.PORT || (configDefault.get("port") as number);

app.listen(PORT, async () => {
  log.info(`Server running on PORT -> ${PORT}`);

  await connect();
});
