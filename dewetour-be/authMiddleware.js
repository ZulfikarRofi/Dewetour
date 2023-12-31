const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')

    if(!token){
        res.status(401).json({message:"Unauthorized: No token provided"})
    }


    jwt.verify(token, 'your-secret-key', (err, user) => {
        if(err){
            res.status(403).json({message:"Forbidden: Invalid token"})
        }

        req.user = user;
        next();
    })


}

module.exports = {authenticateToken}