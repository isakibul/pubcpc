const { createLogger } = require("winston");

const {
  consoleTransport,
  infoFileTransport,
  errorFileTransport,
  elasticSearchTransport,
} = require("./transports");

const logger = createLogger({
  transports: [
    consoleTransport,
    infoFileTransport,
    errorFileTransport,
    elasticSearchTransport,
  ],
});

module.exports = logger;
