//Importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');



//iniciando o express
const server = express();

server
.use(express.static('public'))

//configurar template engines
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//Criando caminho/rotas
.get('/' , pages.index)
.get('/orphanage' , pages.orphanage)
.get('/orphanages' , pages.orphanages)
.get('/create-orphanage' , pages.createOrphanage)


// Ligar o servidor

server.listen(5500);