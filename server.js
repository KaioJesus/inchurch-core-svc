const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { USERS_LIST } = require("./utils/users.list");
const { generateToken } = require("./utils/jwt");
const { authenticationToken } = require("./middlewares/authenticate-token");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Usar o middleware cors para permitir todas as origens
app.use(cors());

app.post("/login", async (req, res) => {
  const { username, password, recaptcha } = req.body;

  if (!recaptcha)
    return res.status(400).json({ message: "Token reCAPTCHA não fornecido." });

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`;
  console.log("Verifying reCAPTCHA with URL:", verificationURL);

  try {
    const response = await axios.post(verificationURL);
    const { success } = response.data;
    console.log("reCAPTCHA verification data:", success);

    if (!success) {
      return res
        .status(400)
        .json({ message: "Falha na verificação do reCAPTCHA." });
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    const USER_FOUND = USERS_LIST.find(
      (user) => user.username === username && user.password === password
    );
    console.log("Searching for user:", username);
    console.log("password:", password);

    console.log(USERS_LIST[0].password)
    console.log(password === USERS_LIST[0].password);

    console.log(username === USERS_LIST[0].username);

    console.log("User found:", USER_FOUND);

    if (!USER_FOUND)
      return res.status(401).json({ message: "Invalid credentials." });

    const token = generateToken(username);
    console.log(token)
    return res.json({
      token: token,
      user: {
        name: USER_FOUND.name,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

app.post("/validate-token", authenticationToken, (req, res) => {
  res.json({ message: "Token Válido", username: req.username });
});

app.listen(PORT, () => {
  console.log(`O Servidor está rodando no http://localhost:${PORT}`);
});
