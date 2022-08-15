const express = require('express')

const app = express()

app.listen('3000')

// middleware
app.use(express.json())
/*
// Route Params
app.route('/').get( (req, res) => res.send('Bem vindo!!'))

app.route('/:variavel').get( (req, res) => res.send( req.params.variavel))

app.route('/identidade/:nome').get((req, res) => res.send( req.params.nome))
*/
// Query Params
app.route('/').get( (req, res) => res.send(req.query.nome))

app.route('/about/user').get( (req, res) => res.send( req.query))

app.route('/').post( (req, res) => {
  const {temperature, humidity, sun} = req.body
  res.send(`temperature: ${temperature}, humidity: ${humidity}, sun: ${sun}`)
} )


