const express = require('express')
const usuarios = require('./usuarios')

const rutas = express.Router()

rutas.use('/usuarios', usuarios)

module.exports = rutas
