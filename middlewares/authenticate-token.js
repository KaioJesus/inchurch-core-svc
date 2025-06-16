const {validateToken} = require('../utils/jwt');

function authenticationToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token)
        return res.status(401).josn({message: 'Token not provided.'});

    const TOKEN_DECODED = validateToken(token);

    if(!TOKEN_DECODED)
        return res.status(403).json({message: 'Invalid or expired token.'})


    req.username = TOKEN_DECODED.username;
    next();
}

module.exports = {authenticationToken};