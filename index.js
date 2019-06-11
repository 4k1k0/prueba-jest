const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const routes = require('./server')
const app = express()

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)

const server = app.listen(5000, () => console.log('Escuchando en puerto 5000'))

module.exports = server
