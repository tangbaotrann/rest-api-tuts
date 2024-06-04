const pinoLogger = require("pino");
const pinoPretty = require("pino-pretty");
// const dayjs = require("dayjs");

const stream = pinoPretty({
  colorize: true,
});

const log = pinoLogger(
  {
    level: "info",
    base: {
      pid: true,
    },
    // transport: {
    //   target: "pino-pretty",
    //   options: {
    //     colorize: true,
    //   },
    // },
    // timestamp: () => `, "time": "${dayjs().format("DD/MM/YYYY HH:mm:ss a")}`,
  },
  stream
);

export default log;
