const express = require("express");
const userRouter = require("./routes");
const logger = require("./utils/logger");
const correlationId = require("./middlewares/setCorrelationId");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express Winston Logger
const {
  expressWinstonInfoLogger,
  expressWinstonErrorLogger,
} = require("./middlewares/ExpressWinstonLogger");

app.use(correlationId);

app.use(expressWinstonInfoLogger);

app.use(userRouter);

app.use(expressWinstonErrorLogger);

app.use((error, req, res, next) => {
  const errorObj = {
    message: error?.message || "Something went wrong",
    status: error?.status || 500,
  };
  logger.error(JSON.stringify(errorObj));
  res.status(errorObj.status).json(errorObj);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
