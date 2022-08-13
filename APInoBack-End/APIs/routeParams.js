// Criando Server

const express = require('express');

const app = express();

app.listen('3000')

// Criando Route Params
app.route('/').get( (req, res) => res.send("oiiiee!!"))

app.route('/:variavel').get( (req, res) => res.send( req.params.variavel ))

app.route('/:identidade/nome').get( (req, res) => res.send( req.params.nome ))



