const detallesController = require('../controllers/detallesController');
var express = require('express');
var router = express.Router();

router.get("/:id/:category", detallesController.detalle)  

module.exports = router;