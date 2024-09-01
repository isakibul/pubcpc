const winstonExpressLogger = require("express-winston");
const logger = require("../utils/logger");

const expressWinstonLogger = (level) => {
  return winstonExpressLogger.logger({
    level: level || "http",
    winstonInstance: logger,
    meta: true,
    msg: "HTTP {{res.statusCode}} {{req.method}} {{req.responseTime}} ms {{req.url}}",
    expressFormat: true,
    colorize: false,
  });
};

const expressWinstonErrorLogger = expressWinstonLogger("error");
const expressWinstonInfoLogger = expressWinstonLogger("error");

module.exports = {
  expressWinstonInfoLogger,
  expressWinstonErrorLogger,
};
