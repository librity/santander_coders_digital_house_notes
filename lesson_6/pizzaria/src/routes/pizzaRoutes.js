const express = require('express')

const routes = express.Router()

const PizzaController = require("../controllers/PizzaController");

routes.get('/', PizzaController.show)

module.exports = routes