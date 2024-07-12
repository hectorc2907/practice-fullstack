export const authRequired = (req, res, next) => {
  const token = req.headers.cookie;
  console.log(token);
  next();
};
