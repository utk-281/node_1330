exports.authenticate = async (req, res, next) => {
  //   console.log(req);
  console.log(req.cookies);
  let cookie = req.cookies.myCookie;
  if (!cookie) return res.status(400).json({ message: "please log in first" });

  next();
};
