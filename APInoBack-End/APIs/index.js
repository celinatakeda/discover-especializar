// Criando Server

const express = require('express');

const app = express();

app.listen('3000')

app.route('/').get( (req, res) => res.send("ola"))

// middleware
app.use(express.json())

/** 
app.route('/').post( (req, res) => {
  res.send(req.body.nome)
})
**/

app.route('/').post( (req, res) => {
  const {nome, cidade} = req.body
  res.send(`Meu nome é ${nome} e minha cidade é ${cidade}`)
})

app.route('/').post( (req, res) => {
  const {nome, cidade, livros_favoritos} = req.body
  res.send(livros_favoritos)
})