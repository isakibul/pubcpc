const { createLogger } = require("winston");

const {
  consoleTransport,
  infoFileTransport,
  errorFileTransport,
} = require("./transports");

const logger = createLogger({
  transports: [consoleTransport, infoFileTransport, errorFileTransport],
});

module.exports = logger;
