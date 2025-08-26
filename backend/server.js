const express = require("express");
const app = express();
//npm install cors - Permite/Autoriza requisição no servidor
const cors = require("cors")
app.use(cors());

const port = 5001;

app.get("/test", (req, res)=>{
    res.send("Olá Servidor teste Ok!")
})

app.get("/system", (req, res)=>{
    res.send("Seja Bem-Vindo ao Sistema!")
})

app.get("/about", (req, res)=>{
    res.send("Página Sobre!")
})

app.listen(port, ()=>{
    console.log(`Sevidor rodando http://localhost:${port}`)
})
