const jwt = require("jsonwebtoken");
const User = require("../models/User");
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user=decoded;
      console.log("Decoded Token:", decoded);

      const user = await User.findById(decoded.user.id).select("-password");

      if (!user) {
        return res.status(401).json({ message: "User not found with this token" });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Token verification failed: ", error.message);
      res.status(401).json({
        message: "Not authorized, token failed",
        error: error.message,
      });
    }
  } else {
    res.status(401).json({
      message: "Not authorized, no token provided",
    });
  }
};
module.exports = { protect  };

