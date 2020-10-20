// import dependencies
const express = require("express");
const path = require("path");
const pages = require("./pages.js");
//iniciando o express
const server = express();

server
//mapear arq. estáticos
    .use(express.static("public"))

//configurar a templateEngine (handlebars)
.set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

//criar rotas da aplicação
.get("/", pages.index)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage)

//ligar o servidor
server.listen(5500);