const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
  return res.json({
    msj: 'Todo ok'
  })
})

module.exports = route
