const express = require("express");

const routes = express.Router();

const StaticController = require("../controllers/StaticController");

routes.get("/", StaticController.home);
routes.get("/home", StaticController.home);
routes.get("/contact", StaticController.contact);
routes.get("/about", StaticController.about);

module.exports = routes;
