const express = require("express");
const app = express();

const path = require("path");
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath))

app.listen(process.env.PORT || 3005, ()=> {console.log("El servidor esta VIVO")});

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/ofertas", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/ofertas.html"))
})
app.get("/register", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.get("/login", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})