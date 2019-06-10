const express = require('express')
const route = express.Router()
const usuarios = require('./data/usuarios')

route.get('/', (req, res) => {
  return res.json({
    status: true,
    usuarios
  })
})

route.get('/:id', (req, res) => {
  const id = req.params.id
  const usuario = usuarios.filter(u => u.id === Number(id))
  if (usuario.length === 0) {
    return res.status(404).json({
      status: false,
      mensaje: 'No usuario'
    })
  }
  return res.json({
    status: true,
    usuario
  })
})

module.exports = route
