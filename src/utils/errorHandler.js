// Function That Shows Details About The Error Only on The Development Phase

const sendDevelopmentError = async (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message;
  const stack = err.stack;
  const data = err.data;
  res.status(status).json({ status, message, stack, data });
};

module.exports = sendDevelopmentError;
