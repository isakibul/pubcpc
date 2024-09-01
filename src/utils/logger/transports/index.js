const { format, transports } = require("winston");
const { json, timestamp, combine } = format;

// console transport
const consoleTransport = new transports.Console({
  level: "info",
  format: combine(timestamp(), json()),
});

// file transport
const fileTransport = (level, filename) => {
  return new transports.DailyRotateFile({
    level: level || "info",
    format: combine(timestamp(), json()),
    filename: filename || "lnfo-%DATE%.log",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
  });
};

const infoFileTransport = fileTransport("info", "logs/info/lnfo-%DATE%.log");
const errorFileTransport = fileTransport("error", "logs/error/lnfo-%DATE%.log");

module.exports = {
  consoleTransport,
  infoFileTransport,
  errorFileTransport,
};
