const jwt = require('jsonwebtoken');
const SECRET_KEY = 'inchurch';

function generateToken(username){
    return jwt.sign({ username }, SECRET_KEY, {expiresIn: 300})
}

function validateToken(token){
    let TOKEN_IS_VALID = undefined;
    try {
        if(!token) {
            throw new Error('Empty token.');
        }
        TOKEN_IS_VALID = jwt.verify(token, SECRET_KEY);
    } catch (error) {
        TOKEN_IS_VALID = undefined;
    }

    return TOKEN_IS_VALID;
}

module.exports = {validateToken, generateToken}