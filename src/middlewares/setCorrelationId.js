const setCorrelationId = (req, res, next) => {
  const key = "x-correlation-id";
  const correlationId = req.headers[key] || Date.now().toString();
  // set req header
  req.headers[key] = correlationId;
  // set res header
  res.set(key, correlationId);
  next();
};

module.exports = setCorrelationId;
