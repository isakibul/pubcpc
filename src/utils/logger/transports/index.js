require("winston-daily-rotate-file");
const { format, transports } = require("winston");
const { json, timestamp, combine } = format;
const { ElasticsearchTransport } = require("winston-elasticsearch");

// elasticsearch transport
const elasticSearchTransport = new ElasticsearchTransport({
  level: "http",
  clientOpts: {
    node: "http://localhost:9200",
  },
  indexPrefix: "logs-express",
  indexSuffixPattern: "YYYY-MM-DD",
});

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
  elasticSearchTransport,
};
