const adminAuth = (req, res, next) => {
  const token = "tharun";
  const isAdmin = token === "tharun";
  console.log("Checking authorization");
  console.log(req.url);
  console.log(req.path);
  if (!isAdmin) {
    res.status(500).send("401 Unauthorized request");
  }
  next();
};
module.exports = { adminAuth };
