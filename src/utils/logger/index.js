require("winston-daily-rotate-file");
const { createLogger } = require("winston");

const {
  consoleTransport,
  errorFileTransport,
  infoFileTransport,
} = require("./transports");

const logger = createLogger({
  transports: [consoleTransport, infoFileTransport, errorFileTransport],
});

module.exports = logger;
