const firstMiddleware = (req, res, next) => {
  req.currentTime = new Date(Date.now());
  next();
};

export default firstMiddleware;
