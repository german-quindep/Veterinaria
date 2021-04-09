//ESTE ERROR SERA LLAMADO AL APP
const middlewareErrors = (error,req, res, next) => {
  res.status(400).json({
    message: error.message,
  });
};

module.exports = middlewareErrors;
