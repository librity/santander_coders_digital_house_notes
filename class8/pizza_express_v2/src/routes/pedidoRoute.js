const express = require('express')
let route = express.Router()

const pedidoController =  require('../controllers/pedidoController')

route.get('/cadastro', pedidoController.viewFormPedido)

route.post('/cadastro', pedidoController.criarPedido)
route.get('/teste', pedidoController.criarPedido)


module.exports = route