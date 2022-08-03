// Criando Server

const express = require('express');

const app = express();

app.listen('3000')

// Rota get
//app.route('/').get( (req, res) => res.send("Hello"))
app.route('/sobre').get( (req, res) => res.send("Hello sobre"))

//middleware
app.use(express.json())

// Rota post
//app.route('/').post( (req, res) => console.log(req.body))
app.route('/').post( (req, res) => res.send(req.body))

// Rota put
let author = "Celina"

app.route("/").get( (req, res) => res.send(author))

app.route('/').put( (req, res) => {
  author = req.body.author
  res.send(author)
})

// Rota delete
app.route('/:identificador').delete( (req, res) => {
  res.send(req.params.identificador)
})

// O que são parâmetros nas requisições
app.route('/').get( (req, res) => res.send(req.query.name))

app.route('/').post ( (req, res) => res.send(req.body))

app.route('/:parametro').get( (req, res) => res.send(req.params.parametro))