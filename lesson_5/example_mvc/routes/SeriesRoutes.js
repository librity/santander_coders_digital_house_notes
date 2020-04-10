const express = require("express");
const router = express.Router();

const SeriesControllers = require("../controllers/SeriesController");

router.get("/", SeriesControllers.list);

router.get("/:genero", SeriesControllers.filter);

router.get("/criar", SeriesControllers.create);

module.exports = router;
