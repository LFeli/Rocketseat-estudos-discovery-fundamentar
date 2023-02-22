const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        {tittle: "D",
         message: " Desenvolvedor de aplicações"},
        {tittle: "E",
         message: " EJS usa Javascript para renderizar o HTML"},
        {tittle: "M",
         message: " Muito fácil de usar "},
        {tittle: "A",
         message: " Amorzinho"},
        {tittle: "I",
         message: " Install EJS"},
        {tittle: "S",
         message: " Simple sintaxe"}
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando Javascript"
    res.render("pages/index" , {
        qualitys: items, 
        subtitle: subtitle,
    })
})

app.get("/sobre", function(req, res){
    res.render("pages/about")
})

app.listen(8080);
console.log("Servidor funcionando");