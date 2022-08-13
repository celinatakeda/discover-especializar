// Criando Server

const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000')

/** Utilizando axios para consumir dados do github
app.route('/').get( (req, res) => {
  axios.get('https://api.github.com/users/celina')
  .then(result => res.send(result.data))
  .catch(error => console.log(error))
})
**/

app.route('/').get( (req, res) => {
  axios.get('https://api.github.com/users/celinatakeda')
  .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
  .catch(error => console.log(error))
})