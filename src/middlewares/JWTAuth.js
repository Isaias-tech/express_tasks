const jwt = require("jsonwebtoken");

const JWTAuth = (req, res, next) => {
	const token = req.cookies.token;
	try {
		req.user = jwt.verify(token, process.env.MY_SECRET);
		next();
	} catch (err) {
		res.clearCookie("token");
		return res.redirect("/");
	}
};

module.exports = JWTAuth;
