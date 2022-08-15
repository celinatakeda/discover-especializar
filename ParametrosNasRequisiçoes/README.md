## Route Params
```
const express = require('express')

const app = express()

app.listen('3000')

// middleware
app.use(express.json())

app.route('/').get( (req, res) => res.send('Bem vindo!!'))

app.route('/:variavel').get( (req, res) => res.send( req.params.variavel))

app.route('/identidade/:nome').get((req, res) => res.send( req.params.nome))

```

## Query Params
```
const express = require('express')

const app = express()

app.listen('3000')

// Query Params
app.route('/').get( (req, res) => res.send(req.query.nome))

app.route('/about/user').get( (req, res) => res.send( req.query))

- Insomnia
	Método: Get 
	url: locahost:3000?state=on
             localhost:3000/about/user?id=852014&state=on&temperature=21.80
```