const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {USERS_LIST} = require('./utils/users.list');
const { generateToken,} = require('./utils/jwt');
const { authenticationToken,} = require('./middlewares/authenticate-token');

const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Usar o middleware cors para permitir todas as origens
app.use(cors());

app.post('/login', (req, res) => {
    setTimeout(()=>{
        const {username, password} = req.body;
        const USER_FOUND = USERS_LIST.find(user => user.username === username && user.password === password);
    
        if(!USER_FOUND)
            return res.status(401).json({message: 'Invalid credentials.'})
    
        const token = generateToken(username);
        return res.json({token: token,
            user: {
                name: USER_FOUND.name
            }
        });
    }, 300)
})

app.post('/validate-token', authenticationToken, (req, res) =>{
    res.json({message: 'Token Válido', username: req.username})
})

app.listen(PORT, () => {
    console.log(`O Servidor está rodando no http://localhost:${PORT}`);
});