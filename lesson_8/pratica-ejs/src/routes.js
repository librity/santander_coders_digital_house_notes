const express = require('express');
const indexcontroller = require('./controllers/indexController');

const router =  express.Router();

router.get('/', indexcontroller.inicio);


module.exports = router