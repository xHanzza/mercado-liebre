const express = require("express");
const app = express();

const path = require("path");
const publicPath = path.join(__dirname, 'public');
const port = process.env.PORT || 3005;

app.use(express.static(publicPath))

app.listen(port, ()=> {console.log("Sever running in port ${port}")});

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