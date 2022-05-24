const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token; // Esto trae un objeto, la propiedad 'token' es el nombre que se le dio en el header en postman
    console.log(req.headers)

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        console.log(token)
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err){
                return res.status(401).json("Token is not valid");
            }
            // err && res.status(401).json("Token is not valid");
            req.user = user;
            console.log('LOG 1', req.user)
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.userid || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
};
