require("winston-daily-rotate-file");
const { format, transports } = require("winston");
const { json, timestamp, combine } = format;

// console transport
const consoleTransport = new transports.Console({
  level: "info",
  format: combine(timestamp(), json()),
});

// daily rotate file transport
const fileTransport = (level, filename) => {
  return new transports.DailyRotateFile({
    level: level || "info",
    format: combine(timestamp(), json()),
    filename: filename || "info-%DATE%.log",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
  });
};

const infoFileTransport = fileTransport("info", "logs/info/info-%DATE%.log");
const errorFileTransport = fileTransport(
  "error",
  "logs/error/error-%DATE%.log"
);

module.exports = {
  infoFileTransport,
  errorFileTransport,
  consoleTransport,
};
